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
        // Handle embedded assets like images
        // You'll need to adjust this based on your Contentful setup
        const { title, description, file } = node.data.target.fields;
        const { url, details } = file;
        const { height, width } = details.image || { height: 400, width: 600 };

        return (
          <div className="my-6">
            <Image
              src={`https:${url}`}
              alt={description || title || "Blog image"}
              width={width}
              height={height}
              className="mx-auto rounded-lg"
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
    <main className="min-h-screen px-6 pt-[25vh] pb-12 font-montserrat-mid">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-center font-montserrat text-secondary">
          {typeof title === "string" ? title : "Untitled"}
        </h1>
        <p className="text-sm mb-10 text-center text-accent">{formattedDate}</p>
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
