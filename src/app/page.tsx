import Image from 'next/image'
import * as React from 'react'
import ScrollElement from '../../components/scrollelement'
import EmblaCarousel from '../../components/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import Spacer from '../../components/spacer'
import FlipCard from '../../components/FlipCard/flipcard'
import TypeEffect from '../../components/TypeEffect'


export default function Home() {

  const registerLink = "https://reddit.com/r/thelostwoods/"
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 8
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
 
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-4 lg:p-8 xl:px-8 2xl:px-20 ">
      {/* Nav Bar */}
      <div className="z-10 flex w-full justify-center items-center font-mono text-md md:text-lg lg:text-xl xl:text-2xl lg:justify-end">
        {/* Logo */}
        <div className='justify-start w-[0px] md:w-full'> 
          <ScrollElement>
            <Image
              className="relative md:w-[50px] lg:w-[100px] xl:w-[150px]"
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
          <button className="flex right-0 top-0 w-fit h-fit font-mono p-4 mt-2 lg:static lg:p-6 lg:rounded-xl lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
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
        <ScrollElement element='faq' offsetpercent={0.35}>
          <button className="relative right-0 top-0 flex w-fit font-mono py-4 mt-2 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
            faq
          </button>
        </ScrollElement>
        <button className="relative right-0 top-0 flex w-fit font-mono py-4 mt-2 p-2 lg:static lg:rounded-xl md:p-6 lg:mx-6 xl:mx-12 hover:bg-blue-300/25 active:bg-blue-100/25">
          sponsors
        </button>
      </div>

      {/* Join Text */}
      <div>
        <p className='text-fhyellow text-center p-4 text-md md:text-lg lg:text-xl xl:text-2xl'>
          {'> '}
          <TypeEffect
              sequence={['register for ',1000]}
              cursor={false}
          />
          {' '}
          <TypeEffect
              sequence={[800,'forsyth hacks ']}
              className='font-bold'
              cursor={false}
          />
          {' '}
          <TypeEffect
              sequence={[1600,'and build new things']}
          />
        </p>
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
      <div id='about' className='static w-full p-4 items-center justify-center text-center text-sm lg:text-md xl:text-2xl'>
        <div className='text-lg lg:text-2xl xl:text-4xl py-8 w-full'>
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

      <Spacer height="50px"/>

      {/* Image Carousel */}
      <div className='flex w-[100vw]'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      </div>

      {/* Description pt 2 */}
      <div className='flex w-full items-center justify-center text-center text-sm lg:text-md xl:text-2xl md:w-[70%]'>
        <p>
        This event is an opportunity for students to explore the realm of computer science and bring their creative ideas to life through a collaborative and competitive experience. Students will form groups and work together on a coding project based on the theme and then present them at the end.
        <br/><br/>
        Create projects, memories, and guide the story of your STEM journey at Forsyth Hacks!
        </p>
      </div>

      <Spacer height='200px'/>
      {/* FAQ */}
      <div className='flex-col justify-center items-center w-full'>
        <p id='faq' className='w-full text-2xl lg:text-2xl xl:text-6xl pb-20 text-center'><b>faq</b></p>
        <div className='flex justify-center items-center'>
          <div className='grid gap-8 grid-rows-9  lg:gap-10 xl:gap-20 lg:grid-rows-3 lg:grid-cols-3 w-fit items-center justify-center'>
            <FlipCard
              title='Hackathon? What’s that?'
              content="A hackathon is a social coding event: you get 8 hours, mentors, workshops, lots of free food, and swag to build anything you want."
              content2="Even if you’ve never written a line of code before, we’d love to have you there!"
              reversed={true}
            />
            <FlipCard
              title='Will there be hacking?'
              content="No, we’re not “hacking into the mainframe”. The term merely stands for coding and tinkering with computers."
              content2="A hacker is someone who creates effective solutions to computing problems and strives to build projects. That’s what we aim for all Forsyth Hacks attendees to achieve!"
            />
            <FlipCard
              title="What if I’ve never coded before?"
              content="That’s totally fine! We’ll have beginner-friendly workshops and mentors to help you out."
              content2="Come for the experience. We promise you won’t regret it.!"
            />
            <FlipCard
              title='Is there a registration fee?'
              content="Nope, thanks to our sponsors Forsyth Hacks is completely non-profit and free to participate in."
            />
            <FlipCard
              title="Who’s eligible to participate?"
              content="Any student who identifies as a high schooler can attend and participate."
              content2="Coding experience does not matter!"
            />
            <FlipCard
              title='What do I need to bring?'
              content="Bring a laptop, charger, and anything else you think you’ll need to build your project throughout the day."
            />
            <FlipCard
              title='Will there be prizes, food, and swag?'
              content="Yes, yes, and yes!"
              content2="No one will go home empty handed."
            />
            <FlipCard
              title='How long is Forsyth Hacks?'
              content="he hackathon will be a full day event from 9 AM to 6 PM."
              content2="Even if you’ve never written a line of code before, we’d love to have you there!"
            />
            <FlipCard
              title='Will there be teams? How many people per team?'
              content="Teams can be anywhere around 1-4 people."
              content2="Don’t worry if you don’t have a team by the time you register! You can meet new people and create a team the day of the hackathon."
            />
          </div>
        </div>
      </div>
      <Spacer height='100px'/>
      
      {/* Sponsors */}
      <div id='about' className='static w-full p-4 items-center justify-center text-center text-sm lg:text-md xl:text-2xl'>
        <div className='text-lg lg:text-2xl xl:text-4xl py-8 w-full'>
          <b>Sponsors</b>
        </div>
        <br/>
        <div className='flex w-full justify-center items-center'>
          <p className='md:w-[70%]'>
            We are very grateful to all our sponsors who help makes events like these possible!
            <br/><br/>
            If you would like to donate, you can do so here.
          </p>
        </div>
        <div className='grid gap-8 py-8 grid-cols-1 grid-rows-3 items-center justify-items-center lg:grid-cols-3 lg:grid-rows-1 lg:py-16 xl:w-[70%] xl:m-auto'>
          <div className='relative rounded-full bg-blue-200 w-64 h-64 overflow-clip border-white border-4'>
            <Image
              src="/carousel/image1.jpg"
              alt='Sponsor 1'
              layout='fill'
              priority
            />
          </div>
          <div className='relative rounded-full bg-blue-200 w-64 h-64 overflow-clip border-white border-4'>
            <Image
              src="/carousel/image1.jpg"
              alt='Sponsor 1'
              layout='fill'
              priority
            />
          </div>
          <div className='relative rounded-full bg-blue-200 w-64 h-64 overflow-clip border-white border-4'>
            <Image
              src="/carousel/image1.jpg"
              alt='Sponsor 1'
              layout='fill'
              priority
            />
          </div>
        </div>
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
