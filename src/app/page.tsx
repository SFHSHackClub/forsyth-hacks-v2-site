import Image from 'next/image'
import * as React from 'react'

export default function Home() {

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-6 md:p-8 lg:p-24">
      <div className="z-10 flex w-full justify-center items-center font-mono text-sm lg:text-lg lg:justify-end">
        <div className='justify-start w-[0px] md:w-full'>
          scrollBtn(0, 
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-[0px] md:w-[140px] lg:w-[200px]"
            src="/fs-hacks-temp-cropped.png"
            alt="Next.js Logo"
            width={180}
            height={180}
            priority
          />)
        </div>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-8 hover:bg-blue-300/25 active:bg-blue-100/25">
          about
        </button>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-8 hover:bg-blue-300/25 active:bg-blue-100/25">
          register
        </button>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-8 hover:bg-blue-300/25 active:bg-blue-100/25">
          faq
        </button>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-8 hover:bg-blue-300/25 active:bg-blue-100/25">
          sponsors
        </button>
      </div>

      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:w-[0px]"
          src="/fs-hacks-temp-cropped.png"
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
