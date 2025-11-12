import Link from 'next/link'
// import Button from '../components/Button'

export const dynamic = 'force-dynamic'

const getPosts = async () => {
  const response = await fetch(
    'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clkpyzgow1kqa01ucbn48192p/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
                posts (stage: PUBLISHED, orderBy: createdAt_DESC, first: 20) {
                  publishedAt
                  title
                  slug
                  coverImage {
                    url
                    width
                    height
                  }
                }
              }`,
      }),
      next: { revalidate: 0 },
    }
  )

  if (!response.ok) {
    console.error('[getPosts] Failed to fetch:', await response.text())
    return []
  }

  const { data } = await response.json()
  return data.posts || []
}

export const metadata = {
  title: 'Blog | Marketing Ideas For Pool Builders and Pool Service Companies',
  description:
    'Marketing Ideas For Pool Builders and Contractors from Pool Builder Growth',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/blog',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://poolbuildergrowth.com/blog',
      site_name: 'Pool Builder Growth',
    },
  },
}

export default async function Posts() {
  const posts = await getPosts()

  return (
    <>
      <main>
        <div className="my-6 lg:my-20 text-center px-6 md:px-0">
          <h1 className="text-2xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Pool Builder Growth Blog
          </h1>
          <p className="my-4 lg:my-10 text-xl">
            Marketing Ideas For Pool Builders and Pool Contractors
          </p>
          <div className="text-center my-5">
            <Link href="ai-seo-checklist">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl mb-6">
                Download Your FREE AI SEO Checklist
              </button>
            </Link>
          </div>
        </div>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="lg:grid grid-cols-1 gap-x-8 justify-between w-full">
            <ul className="col-span-2">
              {posts.map((post) => (
                <div key={post.slug}>
                  <li>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-black no-underline"
                    >
                      <div className="grid lg:grid-cols-2 lg:gap-8 items-center mb-8">
                        <img
                          className="mb-6 w-full"
                          src={post.coverImage.url}
                          alt={post.title}
                          title={post.title}
                          loading="lazy"
                          width={post.coverImage.width}
                          height={post.coverImage.height}
                        />
                        <div className="">
                          <h2 className="text-xl md:text-3xl mb-6">
                            {post.title}
                          </h2>
                          <p>Read more</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
