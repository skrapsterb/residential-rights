import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '../components/Container';
import { getAllPosts } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Legal insights for Texas tenants and homeowners — lease tips, security deposit guidance, HOA dispute strategies, and more from Residential Rights Legal Counsel.',
  alternates: { canonical: '/blog' },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white border-b border-neutral-200">
        <Container className="py-16 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
            Practical legal insights for Texas tenants and homeowners — written
            by a licensed attorney, not a chatbot.
          </p>
        </Container>
      </section>

      {/* Posts grid */}
      <section className="py-16 sm:py-20">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500 text-lg">
                New articles are on the way — check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-sm text-neutral-500">
                    {formatDate(post.date)} &middot; {post.readTime} min read
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-neutral-600 line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                    Read more
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
