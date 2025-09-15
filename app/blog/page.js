import Link from 'next/link'
// import Button from '../components/Button'

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
      next: { revalidate: 60 },
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
    'Marketing Ideas For Pool Builders and Pool Service Companies from Pool Builder Growth',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/blog',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://poolbuildergrowth.com/blog',
      site_name: 'Pool Builder Growth',
      images: [
        {
          url: 'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
          width: 3961,
          height: 2641,
          alt: 'Couple just married, walking down the aisle.',
        },
      ],
    },
  },
}

export default async function Posts() {
  const posts = await getPosts()

  return (
    <>
      <div className="my-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Pool Builder Growth Blog
        </h1>
        <p className="my-10 text-xl">
          Marketing Ideas For Pool Builders and Pool Service Companies
        </p>
      </div>
      <div className="container max-w-4xl mx-auto px-6">
        <div className="mb-20"></div>
        <div className="lg:grid grid-cols-1 gap-x-8 justify-between w-full">
          <ul className="col-span-2">
            {posts.map((post) => (
              <div key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-black no-underline"
                >
                  <div className="grid lg:grid-cols-2 lg:gap-8 items-center mb-8">
                    <img
                      className="mb-6"
                      src={post.coverImage.url}
                      alt={post.title}
                      title={post.title}
                      loading="lazy"
                      width={post.coverImage.width}
                      height={post.coverImage.height}
                    />
                    <div className="">
                      <h3 className="text-3xl mb-6">{post.title}</h3>
                      <p>Read more</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        {/* <div className="center">
          <a href={calendly} target="_blank">
            <Button
              buttonText="Book a Call With Monica Today!"
              bgColor="bg-purple-500"
              borderWidth="border-0"
              textColor="text-white"
              textSize="md:text-xl"
            />
          </a>
        </div> */}
      </div>
    </>
  )
}
