import Link from 'next/link'
import ShareBtn from '@/components/ShareBtn'

import { RichText } from '@graphcms/rich-text-react-renderer'

async function getPost(slug) {
  const res = await fetch(
    'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clkpyzgow1kqa01ucbn48192p/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Post($slug: String!) {
                post(where: {slug: $slug}) {
                  title
                  postTitle
                  excerpt
                  date
                  updatedAt
                  slug
                  coverImage {
                    url
                    width
                    height
                    alt
                  }
                  content {
                    raw
                  }
                  author {
                    name
                    photo {
                    url
                    height
                    width
                    alt
                    }
                    bio
                  }
                }
            }`,
        variables: {
          slug: slug,
        },
      }),
    }
  )
  const { data } = await res.json()
  return data.post
}

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://poolbuildergrowth.com/blog/${post.slug}`,
    },
  }
}

export default async function Page({ params }) {
  const slug = (await params).slug
  const post = await getPost(slug)

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Monica Browne Weddings',
      logo: {
        '@type': 'ImageObject',
        url: post.coverImage.url,
      },
    },
    datePublished: post.updatedAt,
    image: post.coverImage.url,
  }
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      <section>
        <div className="container max-w-2xl mx-auto my-10 px-4">
          <h1 className="text-4xl my-10">{post.title}</h1>
          {/*  */}
          <p className="text-xl py-2">Share with your busines partner:</p>
          <ShareBtn
            shareLink={`https://poolbuildergrowth.com/blog/${post.slug}`}
          />
          <article className=" py-4">
            <RichText
              content={post.content.raw}
              renderers={{
                h2: ({ children }) => (
                  <h2 className="text-xl lg:text-4xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl lg:text-3xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl lg:text-3xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h4>
                ),
                a: ({ children, href, openInNewTab }) => (
                  <Link
                    href={href}
                    className="#a29bfe underline"
                    target={openInNewTab ? '_blank' : '_self'}
                    rel="noreferrer"
                  >
                    {children}
                  </Link>
                ),
                p: ({ children }) => (
                  <p className="md:text-xl leading text-ui-fg-base font-normal my-6 leading-8">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="leading-relaxed text-ui-fg-base font-normal lg:my-5 list-disc mx-10 mb-10">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="md:text-xl leading text-ui-fg-base font-normal my-6 leading-8">
                    {children}
                  </li>
                ),
              }}
            />
          </article>
          <div className="my-4 border-4 border-solid border-slate-50 p-8">
            <img
              src={post.author.photo.url}
              className="w-[5rem] my-6"
              alt={post.author.name}
              title={post.author.name}
              width={post.author.photo.width}
              height={post.author.photo.height}
            />
            <p className="text-xl leading-normal">{post.author.bio}</p>
          </div>
          <Link href="/blog" className="md:text-xl">
            Back to blog
          </Link>
        </div>
      </section>
    </>
  )
}
