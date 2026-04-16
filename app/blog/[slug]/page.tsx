import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../components/Container';
import { BlogServicesLink } from '../../components/PlausibleEvents';
import { getAllPostSlugs, getPostBySlug } from '../../../lib/blog';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Article */}
      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            <svg
              className="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <header className="mt-8">
            <p className="text-sm text-neutral-500">
              {formatDate(post.date)} &middot; {post.readTime} min read
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              {post.title}
            </h1>
          </header>

          <div
            className="mt-10 prose prose-neutral lg:prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-strong:text-neutral-800 prose-li:text-neutral-700"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </Container>
      </article>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-primary-50">
        <Container className="py-16 sm:py-20 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-neutral-900">
            Need help with a situation like this?
          </h2>
          <p className="mt-3 text-neutral-600">
            Our fixed-fee legal services give Texas tenants and homeowners clear
            answers — no hourly billing, no surprises.
          </p>
          <BlogServicesLink
            href="/services"
            className="mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold bg-primary-600 text-white hover:bg-primary-700 shadow-sm transition-colors"
          >
            View Services &amp; Pricing
          </BlogServicesLink>
        </Container>
      </section>
    </>
  );
}
