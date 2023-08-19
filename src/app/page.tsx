import Image from 'next/image'
import * as React from 'react'
import ScrollElement from '../../components/scrollelement'
import EmblaCarousel from '../../components/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'


export default function Home() {

  const registerLink = "https://google.com/"
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 3
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
 
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-6 lg:p-8 xl:px-8 2xl:px-20 ">
      {/* Nav Bar */}
      <div className="z-10 flex w-full justify-center items-center font-mono text-md md:text-xl lg:text-2xl xl:text-3xl lg:justify-end">
        {/* Logo */}
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
        {/* Nav Buttons  */}
        <ScrollElement element='about' offsetpercent={0.2}>
          <button className="relative right-0 top-0 flex w-fit font-mono py-4 mt-2 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
            about
          </button>
        </ScrollElement>
        <a href={registerLink} target='_blank'>
          <button className="flex right-0 top-0 w-fit h-fit font-mono p-2 mt-2 lg:static lg:rounded-xl lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
            <div className='flex w-max items-center justify-center'>
            <p>register</p>
            <Image
              className='m-2 md:w-[25px]'
              src='/newTab.png'
              alt='New Tab Icon'
              width={25}
              height={25}
              priority
            />
            </div>
          </button>
        </a>
        <button className="relative right-0 top-0 flex w-fit font-mono py-4 mt-2 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
          faq
        </button>
        <button className="relative right-0 top-0 flex w-fit font-mono py-4 mt-2 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
          sponsors
        </button>
      </div>

      {/* Join Text */}
      <div>
        <p className='text-fhyellow text-center p-4 text-md md:text-xl lg:text-2xl xl:text-4xl'><ScrollElement element='register'><u>register</u></ScrollElement> for <b>forsyth hacks</b> and build new things|</p>
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
        <p className='text-md sm:text-lg md:text-xl xl:text-4xl text-center'>
          <span className='text-lg sm:text-xl md:text-2xl xl:text-6xl'>November 18th, 2023</span> <br/>
          9:00 AM - 6:00 PM <br/>
          <br/>
          Old Atlanta Rec Center<br/>
          <span className='text-sm sm:txt-md md:text-lg xl:text-2xl'>Esports Arena || 810 Nichols Road, Suwanee</span>
        </p>
      </div>

      {/* Register Button */}
      <div className='static w-full py-16 items-center justify-center text-center'>
        <a href={registerLink} target='_blank'>
          <button id="register" className='px-8 py-4 bg-fhyellow text-black rounded-xl text-sm md:px-12 md:py-8 md:text-lg xl:px-114 xl:py-10 xl:text-2xl hover:bg-yellow-300 active:bg-yellow-100'>
            ⚡ register now for free!
          </button>
        </a>
      </div>

      <br/>
      <br/>

      {/* What is FH */}
      <div id='about' className='static w-full p-4 items-center justify-center text-center text-md lg:text-2xl'>
        <div className='text-lg lg:text-4xl py-8 w-full'>
          what is <b>forsyth hacks 2.0</b>?
        </div>
        <br/>
        <div className='flex w-full justify-center items-center'>
          <p className='md:w-[70%]'>
            Welcome to the 2nd annual Official Forsyth County hackathon for high school students.
            <br/><br/>
            Forsyth Hacks is a FREE full-day high school hackathon (social coding event) for building projects, getting mentored, meeting other like-minded STEM students, and having fun for any high schooler that attends a Forsyth County school.
          </p>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div className='w-full'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      </div>




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
      <div className='py-[2000px]'>

      </div>
    </main>
  )
}
