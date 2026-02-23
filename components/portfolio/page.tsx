'use client';
import { motion } from 'framer-motion';

export default function PortfolioSection() {
  return (
    <section
      id='projects'
      className='flex h-441.75 w-98.25 flex-col items-center gap-6 px-4 py-10 lg:h-[836.67px] lg:w-360 lg:gap-12 lg:px-30 lg:py-20'
    >
      <motion.div
        className='flex h-52.5 w-90.25 flex-col items-center gap-6 lg:h-31 lg:w-300 lg:flex-row lg:justify-between'
        initial={{ opacity: 0, rotateY: 360, scale: 0 }}
        whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ perspective: 1000, transformOrigin: 'bottom' }}
      >
        <div className='h-32.5 w-90.25 gap-2 lg:h-31 lg:w-171.5'>
          <p className='text-display-sm lg:text-display-xl font-bold tracking-[-2%] text-neutral-950 lg:tracking-[-3%]'>
            Design to <span className='text-primary-300'>Code Accuracy</span>
          </p>
          <p className='lg:text-md text-sm font-medium text-neutral-950 lg:tracking-[-3%]'>
            We translated design mockups into pixel-perfect, responsive
            components, ensuring a smooth user experience across all devices.
          </p>
        </div>
        <button className='flex h-14 w-full cursor-pointer items-center justify-between gap-2 rounded-[100px] border border-neutral-300 py-2 pr-2 pl-4 lg:w-39'>
          <span className='text-md font-semibold text-neutral-950'>
            See All
          </span>
          <div className='flex size-9 items-center justify-center rounded-full bg-neutral-950'>
            <img
              src='/assets/icon-Arrow-Right.svg'
              alt='Contact Me'
              className='size-5'
            />
          </div>
        </button>
      </motion.div>
      <motion.div
        className='flex h-363.25 w-full flex-col justify-center gap-5 lg:h-[504.67px] lg:w-300 lg:flex-row'
        initial='hidden'
        whileInView='visible'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              // delayChildren: 3,
            },
          },
        }}
        style={{ transformOrigin: 'right' }}
      >
        {/* Portfolio Cards 1*/}
        <motion.div
          className='flex h-117.75 w-90.25 flex-col lg:h-[504.67px] lg:w-[386.67px]'
          variants={{
            hidden: {
              translateX: '100vh',
            },
            visible: {
              translateX: 0,
            },
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            // delay: 1,
          }}
        >
          <div className='relative flex size-90.25 items-center justify-center gap-2 rounded-3xl bg-neutral-100 p-4 lg:size-[386.67px]'>
            <img
              src='/assets/image-portfolio-1.svg'
              alt='Portfolio Image 1'
              className='size-82.25lg:size-[354.67px] rounded-md'
            />
            <img
              src='/assets/image-BestPortfolio.svg'
              alt='Best Portfolio'
              className='absolute top-7 left-[-8.75px] h-7.25 w-24.25 lg:top-9.5'
            />
          </div>
          <div className='flex h-27.5 w-90.25 items-center justify-between rounded-3xl bg-neutral-100 p-4 lg:h-29.5 lg:w-[386.67px]'>
            <div className='flex h-19.5 w-73.25 flex-col gap-3 lg:h-21.5 lg:w-[318.67px]'>
              <p className='text-md lg:tracking-0 font-bold tracking-[-2%] text-neutral-950 lg:text-lg'>
                Portfolio 1
              </p>
              <div className='h-px w-full border border-neutral-300' />
              <p className='lg:text-md text-xs font-medium text-neutral-600 lg:tracking-[-3%]'>
                Web Development{' '}
              </p>
            </div>
            <button className='bg-primary-300 flex size-9 items-center justify-center rounded-full'>
              <img
                src='/assets/icon-Arrow-Right.svg'
                alt='Contact Me'
                className='size-5'
              />
            </button>
          </div>
        </motion.div>
        {/* Portfolio Cards 2*/}
        <motion.div
          className='flex h-117.75 w-90.25 flex-col lg:h-[504.67px] lg:w-[386.67px]'
          variants={{
            hidden: {
              translateX: '100vh',
            },
            visible: {
              translateX: 0,
            },
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            // delay: 1,
          }}
        >
          <div className='relative flex size-90.25 items-center justify-center gap-2 rounded-3xl bg-neutral-100 p-4 lg:size-[386.67px]'>
            <img
              src='/assets/image-portfolio-2.svg'
              alt='Portfolio Image 2'
              className='size-82.25lg:size-[354.67px] rounded-md'
            />
            <img
              src='/assets/image-BestPortfolio.svg'
              alt='Best Portfolio'
              className='absolute top-7 left-[-8.75px] h-7.25 w-24.25 lg:top-9.5'
            />
          </div>
          <div className='flex h-27.5 w-90.25 items-center justify-between rounded-3xl bg-neutral-100 p-4 lg:h-29.5 lg:w-[386.67px]'>
            <div className='flex h-19.5 w-73.25 flex-col gap-3 lg:h-21.5 lg:w-[318.67px]'>
              <p className='text-md lg:tracking-0 font-bold tracking-[-2%] text-neutral-950 lg:text-lg'>
                Portfolio 2
              </p>
              <div className='h-px w-full border border-neutral-300' />
              <p className='lg:text-md text-xs font-medium text-neutral-600 lg:tracking-[-3%]'>
                Web Development{' '}
              </p>
            </div>
            <button className='bg-primary-300 flex size-9 items-center justify-center rounded-full'>
              <img
                src='/assets/icon-Arrow-Right.svg'
                alt='Contact Me'
                className='size-5'
              />
            </button>
          </div>
        </motion.div>
        {/* Portfolio Cards 3*/}
        <motion.div
          className='flex h-117.75 w-90.25 flex-col lg:h-[504.67px] lg:w-[386.67px]'
          variants={{
            hidden: {
              translateX: '100vh',
            },
            visible: {
              translateX: 0,
            },
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            // delay: 1,
          }}
        >
          <div className='relative flex size-90.25 items-center justify-center gap-2 rounded-3xl bg-neutral-100 p-4 lg:size-[386.67px]'>
            <img
              src='/assets/image-portfolio-3.svg'
              alt='Portfolio Image 3'
              className='size-82.25lg:size-[354.67px] rounded-md'
            />
            <img
              src='/assets/image-BestPortfolio.svg'
              alt='Best Portfolio'
              className='absolute top-7 left-[-8.75px] h-7.25 w-24.25 lg:top-9.5'
            />
          </div>
          <div className='flex h-27.5 w-90.25 items-center justify-between rounded-3xl bg-neutral-100 p-4 lg:h-29.5 lg:w-[386.67px]'>
            <div className='flex h-19.5 w-73.25 flex-col gap-3 lg:h-21.5 lg:w-[318.67px]'>
              <p className='text-md lg:tracking-0 font-bold tracking-[-2%] text-neutral-950 lg:text-lg'>
                Portfolio 3
              </p>
              <div className='h-px w-full border border-neutral-300' />
              <p className='lg:text-md text-xs font-medium text-neutral-600 lg:tracking-[-3%]'>
                Web Development{' '}
              </p>
            </div>
            <button className='bg-primary-300 flex size-9 items-center justify-center rounded-full'>
              <img
                src='/assets/icon-Arrow-Right.svg'
                alt='Contact Me'
                className='size-5'
              />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
