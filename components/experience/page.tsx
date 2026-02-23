'use client';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <motion.section
      className='flex h-332.75 w-98.25 flex-col items-center gap-6 bg-neutral-950 px-4 py-10 lg:h-236.5 lg:w-360 lg:gap-12 lg:px-30 lg:py-20'
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
            // delayChildren: 3,
          },
        },
      }}
      style={{ perspective: 1000, transformOrigin: 'top' }}
    >
      {/* Header */}
      <motion.div
        className='h-11xl flex w-88.25 flex-col gap-2 lg:h-28 lg:w-300 lg:flex-row lg:justify-between'
        variants={{
          hidden: { opacity: 0, rotateX: -90 },
          visible: { opacity: 1, rotateX: 0 },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
          // // delay: 1,
        }}
      >
        <p className='text-display-sm lg:text-display-xl text-neutral-25 h-full font-bold tracking-[-2%] lg:w-91.25 lg:tracking-[-3%]'>
          Experiences That <span className='text-secondary-100'>Shaped Me</span>
          !
        </p>
        <p className='text-neutral-25 text-sm font-semibold lg:w-91.5 lg:text-lg lg:tracking-[-3%]'>
          From startups to side projects, every step has been a chance to learn,
          build, and level up.
        </p>
      </motion.div>
      {/* Separator */}
      <div className='h-px w-full bg-neutral-800' />
      {/* Experience Cards */}
      <div className='flex h-265.75 w-full flex-col gap-4 lg:h-144.5 lg:w-300 lg:gap-8'>
        {/* Card 1 */}
        <motion.div
          className='flex h-83.25 w-full flex-col gap-4 bg-neutral-950 lg:h-37.5 lg:flex-row lg:justify-between lg:gap-0'
          variants={{
            hidden: { opacity: 0, rotateX: -90 },
            visible: { opacity: 1, rotateX: 0 },
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 5,
            // // delay: 1,
          }}
        >
          <div className='flex h-15.5 w-full flex-col gap-1 lg:h-25 lg:w-44.5'>
            <p className='text-sm font-medium text-neutral-400'>
              2025 - Present
            </p>
            <p className='text-neutral-25 text-md lg:tracking-0 font-bold tracking-[-2%] lg:text-xl'>
              Frontend Developer
            </p>
          </div>
          {/* Company Logo */}
          <div className='h-17.75 w-[121.71px] rounded-2xl border-[0.63px] border-neutral-800 p-[5.07px] lg:h-28 lg:w-48 lg:p-2'>
            <div className='h-full w-full gap-[5.07px] rounded-[10.14px] border-[0.63px] border-neutral-800 bg-neutral-950 p-[15.21px] lg:rounded-2xl lg:border lg:p-6'>
              <img
                src='/assets/company-logo-Airbnb.svg'
                alt='Airbnb'
                className='h-[30.43px] w-[81.14px] lg:h-12 lg:w-32'
              />
            </div>
          </div>
          {/* Description */}
          <div className='font-regular lg:text-md h-42 w-full text-sm text-neutral-400 lg:h-37.5 lg:w-128.25 lg:tracking-[-3%]'>
            Built responsive web interfaces using modern frameworks like
            React.js, ensuring seamless integration with backend systems.
            Optimized performance, implemented accessible designs, and delivered
            clean, reusable code to enhance user experience and scalability.
          </div>
        </motion.div>{' '}
        <div className='h-px w-full bg-neutral-800' />
        {/* Card 2 */}
        <motion.div
          className='flex h-83.25 w-full flex-col gap-4 bg-neutral-950 lg:h-37.5 lg:flex-row lg:justify-between lg:gap-0'
          variants={{
            hidden: { opacity: 0, rotateX: -90 },
            visible: { opacity: 1, rotateX: 0 },
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 5,
            // // delay: 1,
          }}
        >
          <div className='flex h-15.5 w-full flex-col gap-1 lg:h-25 lg:w-44.5'>
            <p className='text-sm font-medium text-neutral-400'>
              2025 - Present
            </p>
            <p className='text-neutral-25 text-md lg:tracking-0 font-bold tracking-[-2%] lg:text-xl'>
              Frontend Developer
            </p>
          </div>
          {/* Company Logo */}
          <div className='h-17.75 w-[121.71px] rounded-2xl border-[0.63px] border-neutral-800 p-[5.07px] lg:h-28 lg:w-48 lg:p-2'>
            <div className='h-full w-full gap-[5.07px] rounded-[10.14px] border-[0.63px] border-neutral-800 bg-neutral-950 p-[15.21px] lg:rounded-2xl lg:border lg:p-6'>
              <img
                src='/assets/company-logo-Airtasker.svg'
                alt='Airtasker'
                className='h-[30.43px] w-[81.14px] lg:h-12 lg:w-32'
              />
            </div>
          </div>
          {/* Description */}
          <div className='font-regular lg:text-md h-42 w-full text-sm text-neutral-400 lg:h-37.5 lg:w-128.25 lg:tracking-[-3%]'>
            Built responsive web interfaces using modern frameworks like
            React.js, ensuring seamless integration with backend systems.
            Optimized performance, implemented accessible designs, and delivered
            clean, reusable code to enhance user experience and scalability.
          </div>
        </motion.div>{' '}
        <div className='h-px w-full bg-neutral-800' />
        {/* Card 3 */}
        <motion.div
          className='flex h-83.25 w-full flex-col gap-4 bg-neutral-950 lg:h-37.5 lg:flex-row lg:justify-between lg:gap-0'
          variants={{
            hidden: { opacity: 0, rotateX: -90 },
            visible: { opacity: 1, rotateX: 0 },
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 5,
            // // delay: 1,
          }}
        >
          <div className='flex h-15.5 w-full flex-col gap-1 lg:h-25 lg:w-44.5'>
            <p className='text-sm font-medium text-neutral-400'>
              2025 - Present
            </p>
            <p className='text-neutral-25 text-md lg:tracking-0 font-bold tracking-[-2%] lg:text-xl'>
              Frontend Developer
            </p>
          </div>
          {/* Company Logo */}
          <div className='h-17.75 w-[121.71px] rounded-2xl border-[0.63px] border-neutral-800 p-[5.07px] lg:h-28 lg:w-48 lg:p-2'>
            <div className='h-full w-full gap-[5.07px] rounded-[10.14px] border-[0.63px] border-neutral-800 bg-neutral-950 p-[15.21px] lg:rounded-2xl lg:border lg:p-6'>
              <img
                src='/assets/company-logo-Slack.svg'
                alt='Slack'
                className='h-[30.43px] w-[81.14px] lg:h-12 lg:w-32'
              />
            </div>
          </div>
          {/* Description */}
          <div className='font-regular lg:text-md h-42 w-full text-sm text-neutral-400 lg:h-37.5 lg:w-128.25 lg:tracking-[-3%]'>
            Built responsive web interfaces using modern frameworks like
            React.js, ensuring seamless integration with backend systems.
            Optimized performance, implemented accessible designs, and delivered
            clean, reusable code to enhance user experience and scalability.
          </div>
        </motion.div>{' '}
        <div className='h-px w-full bg-neutral-800' />
      </div>
    </motion.section>
  );
}
