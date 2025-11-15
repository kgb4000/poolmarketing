import Link from 'next/link'
import ShareBtn from '@/components/ShareBtn'
import BlogAudioPlayer from '@/components/BlogAudioPlayer'

import { RichText } from '@graphcms/rich-text-react-renderer'

export const dynamic = 'force-dynamic'

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
                    authorBio {
                    raw
                    }
                  }
                  audio {
                    url
                    fileName
                    mimeType
                    size
                  }
                }
            }`,
        variables: {
          slug: slug,
        },
      }),
      next: { revalidate: 0 },
    }
  )
  const { data } = await res.json()
  return data?.post || null
}

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

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

  if (!post) {
    return (
      <main>
        <div className="container max-w-2xl mx-auto my-10 px-4">
          <h1 className="text-2xl lg:text-4xl my-4 lg:my-10">Post Not Found</h1>
          <p>The requested blog post could not be found.</p>
        </div>
      </main>
    )
  }

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'Pool Builder Growth',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pool Builder Growth',
      logo: {
        '@type': 'ImageObject',
        url: 'https://poolbuildergrowth.com/logo.png',
      },
    },
    datePublished: post.date || post.updatedAt,
    dateModified: post.updatedAt,
    image: {
      '@type': 'ImageObject',
      url: post.coverImage.url,
      width: post.coverImage.width,
      height: post.coverImage.height,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://poolbuildergrowth.com/blog/${post.slug}`,
    },
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <main>
        <section>
          <div className="container max-w-2xl mx-auto my-10 px-4">
            <h1 className="text-3xl lg:text-4xl my-4 lg:my-10">{post.title}</h1>
            {/*  */}
            <p className="text-md py-2">
              Share with your business partner today:
            </p>
            <ShareBtn
              shareLink={`https://poolbuildergrowth.com/blog/${post.slug}`}
            />
            {/* <BlogAudioPlayer audioUrl={post.audio?.url} /> */}
            {post.audio?.url && (
              <>
                <p className="text-xl font-bold my-4">Listen here</p>
                <audio controls>
                  <source src={post.audio?.url} type="audio/ogg" />
                  <source src={post.audio?.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </>
            )}
            <article className="py-4 blog-content">
              <RichText
                content={post.content.raw}
                renderers={{
                  h2: ({ children }) => (
                    <h2 className="!text-2xl lg:!text-4xl !font-bold !text-gray-900 !my-6 lg:!my-8 !leading-tight !block">
                      {children}
                    </h2>
                  ),
                  heading_two: ({ children }) => (
                    <h2 className="!text-2xl lg:!text-4xl !font-bold !text-gray-900 !my-6 lg:!my-8 !leading-tight !block">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="!text-xl lg:!text-3xl !font-semibold !text-gray-800 !my-5 lg:!my-6 !leading-tight !block">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="!text-lg lg:!text-2xl !font-semibold !text-gray-700 !my-4 lg:!my-5 !leading-tight !block">
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
                    <p className="text-base lg:text-lg text-gray-700 font-normal my-4 lg:my-6 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="text-gray-700 my-4 lg:my-6 list-disc ml-6 lg:ml-8 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      {children}
                    </li>
                  ),
                  table: ({ children }) => (
                    <div className="table-container">
                      <table>{children}</table>
                    </div>
                  ),
                  table_head: ({ children }) => <thead>{children}</thead>,
                  table_body: ({ children }) => <tbody>{children}</tbody>,
                  table_row: ({ children }) => <tr>{children}</tr>,
                  table_header_cell: ({ children }) => <th>{children}</th>,
                  table_cell: ({ children }) => <td>{children}</td>,
                }}
              />
            </article>
            <hr className="w-1/2 mx-auto my-10" />
            <div className="my-4 border-slate-50 p-2 rounded-2xl">
              <img
                src={post.author.photo.url}
                className="w-[5rem] my-6"
                alt={post.author.name}
                title={post.author.name}
                width={post.author.photo.width}
                height={post.author.photo.height}
              />
              <RichText
                content={post.author.authorBio.raw}
                renderers={{
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
                    <p className="text-base lg:text-lg text-gray-700 font-normal my-4 lg:my-6 leading-relaxed">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
            <div className="text-center mt-10">
              <Link href="/blog" className="md:text-xl">
                <button className="bg-blue-600 px-6 py-4 rounded-xl text-white font-bold">
                  Back to blog
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
