import { getBlogPosts } from "@/lib/contentful";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const revalidate = 60; // ISR

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen flex flex-col font-montserrat-semi">
      {/* Fixed top spacing */}
      <div className="h-[20vh]"></div>

      {/* Content container */}
      <div className="w-11/12 md:w-4/5 max-w-6xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Blog{" "}
            <span className="bg-gradient-to-r text-secondary">Yazıları</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Android Blast-Off hakkında yazdığımız bütün içerikler bir arada!
            Haydi sen de hemen okumaya başla.
          </p>
        </header>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts.map((post) => (
            <Card
              key={post.sys.id}
              className="mb-6 bg-gray-800/70 backdrop-blur-sm border border-gray-600/30 hover:border-accent hover:bg-gray-800/80 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 group overflow-hidden rounded-xl w-full"
            >
              <CardHeader>
                <p className="text-secondary text-sm mb-4">
                  {new Date(post.sys.createdAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <CardTitle className="text-white group-hover:text-white/90 transition-colors text-xl md:text-2xl font-bold">
                  {String(post.fields.title) || "Untitled Post"}
                </CardTitle>
                {/* Writers section */}
                {Array.isArray(post.fields.writers) &&
                  post.fields.writers.length > 0 && (
                    <div className="text-accent text-sm mt-2">
                      {post.fields.writers.length === 1 ? "Yazar: " : "Yazarlar: "}
                      {post.fields.writers.join(", ")}
                    </div>
                  )}
              </CardHeader>

              <CardContent>
                <p className="text-white/90 text-sm md:text-base">
                  {typeof post.fields.description === "string"
                    ? post.fields.description
                    : "Read this interesting blog post to learn more..."}
                </p>
              </CardContent>

              <CardFooter className="flex justify-between items-center pt-2">
                <Link href={`/blog/${post.fields.slug}`} passHref>
                  <Button
                    className="bg-gray-700/90 hover:bg-gray-600/90 text-white font-medium shadow-md hover:cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-500/30"
                    aria-label={`Read ${
                      String(post.fields.title) || "Untitled Post"
                    }`}
                  >
                    Yazıyı Oku
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
