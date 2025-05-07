// app/blog/[slug]/page.tsx
import { getPostBySlug } from "@/lib/contentful";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Document } from "@contentful/rich-text-types";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 60;

// Helper function to extract text from Contentful rich text document
function extractTextFromRichText(node: any): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractTextFromRichText).join(' ');
  if (node.nodeType === 'text') return node.value;
  if (node.content) return extractTextFromRichText(node.content);
  return '';
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const { title, body, writers } = post.fields;
  const createdAt = post.sys.createdAt;
  const formattedDate = new Date(createdAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Calculate reading time
  let readingTime = 1;
  if (body) {
    const text = extractTextFromRichText(body);
    const wordCount = text.trim().split(/\s+/).length;
    readingTime = Math.max(1, Math.ceil(wordCount / 200));
  }

  const isValidBody =
    typeof body === "object" &&
    body !== null &&
    "nodeType" in body &&
    body.nodeType === "document" &&
    Array.isArray(body.content);

  // Define rendering options for the rich text
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="bg-gray-800 px-1 py-0.5 rounded">{text}</code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="text-2xl font-bold mt-8 mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="mb-1">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-accent pl-4 italic my-4">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-gray-600" />,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = node.data.target;
        if (!asset || !asset.fields) return null;

        const { title, description, file } = asset.fields;
        if (!file || !file.url) return null;

        const { url, details } = file;
        const { height, width } = details?.image || { height: 400, width: 600 };

        return (
          <div className="my-6">
            <Image
              src={`https:${url}`}
              alt={description || title || "Blog image"}
              width={width}
              height={height}
              className="mx-auto rounded-lg"
              priority={false}
            />
            {description && (
              <p className="text-sm text-center text-gray-400 mt-1">
                {description}
              </p>
            )}
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <main className="min-h-screen px-6 pt-[25vh] pb-12 font-montserrat-mid text-gray-300">
      <div className="max-w-3xl mx-auto">
        {/* Authors */}
        {writers && Array.isArray(writers) && writers.length > 0 && (
          <p className="text-sm mb-2 text-accent text-left md:text-center">
            {writers.length === 1 ? 'Yazar:' : 'Yazarlar:'} {writers.join(', ')}
          </p>
        )}
        <p className="text-sm mb-5 text-accent text-left md:text-center">
          {formattedDate} <span className="mx-2">•</span> {readingTime} dk okuma süresi
        </p>
        <h1 className="text-4xl font-extrabold font-montserrat text-secondary mb-15 text-left md:text-center">
          {typeof title === "string" ? title : "Untitled"}
        </h1>
        
        <article className="prose prose-lg max-w-none text-white">
          {isValidBody ? (
            documentToReactComponents(body as unknown as Document, options)
          ) : (
            <p className="text-red-500">Blog içeriği geçersiz veya eksik.</p>
          )}
        </article>
      </div>
    </main>
  );
}
