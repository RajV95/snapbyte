import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href={'/'}>
          <Image
            src={'/assets/icons/logo.svg'}
            alt='logo'
            width={32}
            height={32}
          />
          <h1 className=''>SnapByte</h1>
        </Link>
        <div className='description'>
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src={'/assets/icons/star.svg'}
                  alt='star'
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              SnapByte Made by Rajvardhan - Using NextJS (TypeScript), Bunny, BetterAuth
            </p>
            <article>
              <Link href={'https://github.com/RajV95'}>
                <Image
                  src={'https://media.licdn.com/dms/image/v2/D5603AQGFYBZnLYqr5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726947223127?e=1756339200&v=beta&t=cg69C0982hwFK1FrxKYeuWvwpcQYe5ZGklPlHlUAT-c'}
                  width={64}
                  alt='rajvardhan'
                  height={64}
                  className='rounded-full'
                />
              </Link>
              <div>
                <h2>
                  <Link href={'https://github.com/RajV95'}>Rajvardhan G</Link>
                </h2>
                <p>4th Year UnderGrad @ IIITDMK - CSE with Major in AI</p>
              </div>
            </article>
          </section>
        </div>
        <p></p>
      </aside>
      <aside className='google-sign-in'>
        <section>
          <Link href={'/'}>
            <Image
              src={'/assets/icons/logo.svg'}
              alt='logo'
              width={32}
              height={32}
            />
            <h1>SnapByte</h1>
          </Link>
          <p>Create & Share Your first <span>SnapByte Video</span> in no Time</p>
          <button>
            <Image
              src={'/assets/icons/google.svg'}
              alt='google'
              width={22}
              height={22}
            />
            <span>Sign In with Google</span>
          </button>
        </section>
      </aside>
      <div className='overlay' />
    </main>
  )
}

export default page