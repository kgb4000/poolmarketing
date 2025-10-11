import Link from 'next/link'
import ShareBtn from '../../../components/ShareBtn'
import AudioPill from '../../../components/AudioPill'

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
            <p className="text-xl py-2">
              Share with your business partner today:
            </p>
            <ShareBtn
              shareLink={`https://poolbuildergrowth.com/blog/${post.slug}`}
            />
            <article className=" py-4">
              <RichText
                content={post.content.raw}
                renderers={{
                  embed: {
                    Audio: ({ title, caption, file, durationSeconds }) => {
                      if (!file?.url) return null
                      return (
                        <div className="my-3">
                          <AudioPill
                            title={title || caption || 'Audio'}
                            sources={[
                              {
                                src: file.url,
                                type: file.mimeType || 'audio/mpeg',
                              },
                            ]}
                            initialDuration={
                              typeof durationSeconds === 'number'
                                ? durationSeconds
                                : undefined
                            }
                          />
                        </div>
                      )
                    },
                  },
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
                    <p className="md:text-xl leading text-ui-fg-base font-normal my-6 mb-4 leading-8">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="leading-relaxed text-ui-fg-base font-normal lg:my-5 list-disc ml-8 mb-2 lg:mx-10 lg:mb-10">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="md:text-xl leading text-ui-fg-base font-normal my-2 lg:my-6 leading-8">
                      {children}
                    </li>
                  ),
                  table: ({ children }) => (
                    <table className="border border-gray-800 border-collapse w-full my-6">
                      {children}
                    </table>
                  ),
                  table_head: ({ children }) => (
                    <thead className="bg-gray-800">{children}</thead>
                  ),
                  table_body: ({ children }) => <tbody>{children}</tbody>,
                  table_row: ({ children }) => (
                    <tr className="border-b border-gray-300">{children}</tr>
                  ),
                  table_header_cell: ({ children }) => (
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold bg-gray-50">
                      {children}
                    </th>
                  ),
                  table_cell: ({ children }) => (
                    <td className="border border-gray-800 px-4 py-2">
                      {children}
                    </td>
                  ),
                }}
              />
            </article>
            <div className="my-4 border-4 border-solid border-slate-50 p-8 rounded-2xl">
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
