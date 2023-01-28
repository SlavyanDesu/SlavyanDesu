import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillGithub,
  AiFillBehanceSquare,
} from 'react-icons/ai'
import { useState } from 'react'
import Image from 'next/legacy/image'
import slavyan from '../../public/avatar.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import game from '../../public/game.png'
import design1 from '../../public/design1.png'
import design2 from '../../public/design2.png'
import design3 from '../../public/design3.png'
import design4 from '../../public/design4.png'
import design5 from '../../public/design5.png'
import design6 from '../../public/design6.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Heikal Syah Shiddiq | Portofolio</title>
        <meta name="description" content="A bit of myself." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-black'>slavyan<span className='text-cyan-500'>desu.</span></h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl'
                />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
                  href="https://www.behance.net/slavyan/resume" target={'_blank'} rel="noreferrer"
                >Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-cyan-500 dark:text-cyan-300 font-extrabold md:text-6xl'>
              Heikal Syah Shiddiq
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Developer and designer.
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-200'>
              A young man in search of what he truly loves and jack of all trades, master of none.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <AiFillTwitterCircle onClick={() => window.open('https://twitter.com/sl_avyan', '_blank')} className='cursor-pointer' />
            <AiFillBehanceSquare onClick={() => window.open('https://www.behance.net/slavyan', '_blank')} className='cursor-pointer' />
            <AiFillYoutube onClick={() => window.open('https://www.youtube.com/channel/UCg_NUppMwYKiGp23rjFMyEg', '_blank')} className='cursor-pointer' />
            <AiFillGithub onClick={() => window.open('https://github.com/SlavyanDesu', '_blank')} className='cursor-pointer' />
          </div>
          <div className='relative mx-auto bg-white bg-gradient-to-b from-cyan-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-cyan-300 dark:bg-gradient-to-b dark:from-white'>
            <Image src={slavyan} alt='SlavyanDesu' layout='fill' objectFit='cover'/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Things I do</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            I do all these things because I love it. Usually if I have free time, I always fill it with one of these activities.
            My bad habit is never focusing on one activity lol.
            But that&apos;s a good thing, I get to have a lot of skills on one side.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I enjoy teaching others with what I have learned.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white'>
              <Image src={design} alt='design icon' width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Designs
              </h3>
              <p className='py-2'>
                Create such as poster designs and apparel designs.
                I do typography, anti-design, streetwear, and others.
                But mainly UI/UX and techwear.
              </p>
              <h4 className='py-4 text-cyan-600'>Design Tools</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Lightroom</p>
              <p className='text-gray-800 py-1'>Pixellab</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white'>
              <Image src={code} alt='code icon' width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Codes</h3>
              <p className='py-2'>
                Create a mini self-project and still in the process of learning.
                Not into frontend, I&apos;m really bad on that.
              </p>
              <h4 className='py-4 text-cyan-600'>Languages</h4>
              <p className='text-gray-800 py-1'>Node.js</p>
              <p className='text-gray-800 py-1'>TypeScript</p>
              <p className='text-gray-800 py-1'>JavaScript</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white'>
              <Image src={game} alt='game icon' width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Games</h3>
              <p className='py-2'>
                I&apos;ve also participated in several e-sport tournaments that include pro players.
                Also an active aim enthusiast.
              </p>
              <h4 className='py-4 text-cyan-600'>Games</h4>
              <p className='text-gray-800 py-1'>Apex Legends</p>
              <p className='text-gray-800 py-1'>Rainbow Six: Siege</p>
              <p className='text-gray-800 py-1'>Counter Strike: Global Offensive</p>
            </div>
          </div>
        </section>
        <section className='py-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Code and design has always been my passion. I seem to do more <span className='text-cyan-500'>UI/UX</span> and <span className='text-cyan-500'>techwear design</span>.
              But I also try many other styles besides that, such as typography, anti-design, streetwear, and others.
              My tech stacks are Node.js, HTML, CSS, JavaScript, TypeScript, SQL, and SAP.
              Currently I&apos;m learning Tailwind CSS, Next.js, and React.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={design1} alt='card1' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={design2} alt='card2' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={design3} alt='card3' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={design4} alt='card4' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={design5} alt='card5' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={design6} alt='card6' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout={'responsive'} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}