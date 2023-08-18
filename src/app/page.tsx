import Image from 'next/image'
import * as React from 'react'
import { useRef } from 'react'
import ScrollElement from '../../components/scrollelement'

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-6 lg:p-8 xl:px-8 2xl:px-20 ">
      {/* Header */}
      <div className="z-10 flex w-full justify-center items-center font-mono text-md md:text-xl lg:text-2xl xl:text-3xl lg:justify-end">
        <div className='justify-start w-[0px] md:w-full'> 
          <ScrollElement>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-[0px] md:w-[160px] lg:w-[300px]"
              src="/fs-hacks-temp-cropped.png"
              alt="Next.js Logo"
              width={180}
              height={180}
              priority
            />
          </ScrollElement>
        </div>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
          about
        </button>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
          register
        </button>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
          faq
        </button>
        <button className="relative right-0 top-0 flex w-fit font-mono pb-6 pt-8 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
          sponsors
        </button>
      </div>

      {/* Join Text */}
      <div>
        <p className='text-[#f5e65d] text-center text-md md:text-xl lg:text-2xl xl:text-4xl'><ScrollElement element='register'><u>register</u></ScrollElement> for <b>forsyth hacks</b> and build new things|</p>
      </div>

      {/* Alt Header Image for Small */}
      <div className="relative flex place-items-center p-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:w-[0px]"
          src="/fs-hacks-temp-cropped.png"
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      {/* Date/Time/Loc Text w/ Image */}
      <div className='flex w-full p-4 items-center justify-center'>
        <div className='flex w-0 justify-center md:w-[50%]'>
          <Image
            className='w-0 md:w-[200px] lg:w-[300px] xl:w-[400px] '
            src="/fs-hacks-temp-cropped.png"
            alt="Forsyth Hacks Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <p className='text-md sm:text-lg md:text-xl xl:text-4xl text-center w-[50%]'>
          <span className='text-lg sm:text-xl md:text-2xl xl:text-6xl'>November 18th, 2023</span> <br/>
          9:00 AM - 6:00 PM <br/>
          <br/>
          Old Atlanta Rec Center<br/>
          <span className='text-sm sm:txt-md md:text-lg xl:text-2xl'>Esports Arena || 810 Nichols Road, Suwanee</span>
        </p>
      </div>

      {/* What is FH */}
      <div className='static w-full p-4 items-center justify-center text-center w-full text-md lg:text-2xl'>
        <div className='text-lg lg:text-4xl py-8 w-full'>
          what is <b>forsyth hacks 2.0</b>?
        </div>
        <div className='flex w-full justify-center items-center'>
          <p className='w-[60%]'>
            Welcome to the 2nd annual Official Forsyth County hackathon for high school students.
            <br/>
            Forsyth Hacks is a FREE full-day high school hackathon (social coding event) for building projects, getting mentored, meeting other like-minded STEM students, and having fun for any high schooler that attends a Forsyth County school.
          </p>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div id="test" className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
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
