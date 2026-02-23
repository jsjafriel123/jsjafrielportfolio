'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroImage = () => {
  const frontEnd = 'FRONTEND';
  const developer = 'DEVELOPER';
  const MotionImage = motion(Image);

  return (
    <>
      <MotionImage
        src='/assets/image-Suriken.svg'
        alt='Suriken'
        width={99}
        height={99}
        className='absolute top-181.5 -left-7 z-0 block lg:top-98.75 lg:left-76 lg:h-auto lg:w-41.5'
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 360 }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <MotionImage
        src='/assets/image-Suriken.svg'
        alt='Suriken'
        width={99}
        height={99}
        className='absolute top-217.75 left-73 z-0 block lg:top-184 lg:left-217.75 lg:h-auto lg:w-41.5'
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 360 }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <div className='absolute top-163 left-4.5 h-[218.94px] w-[357.1px] grid-cols-1 grid-rows-1 perspective-midrange lg:top-64.75 lg:left-97.75 lg:h-99.5 lg:w-164.5'>
        <motion.p
          className='font-anton text-secondary-100 absolute z-10 text-center text-[102px]/[125.15px] tracking-[-2%] lg:text-[187.76px]/[228px]'
          initial='hidden'
          whileInView='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {frontEnd.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  rotateY: 90,
                  opacity: 0,
                },
                visible: {
                  rotateY: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
              className='inline-block'
              style={{ transformOrigin: 'bottom' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          className='font-anton text-secondary-100 absolute bottom-0 z-10 text-center text-[92px]/[112.53px] tracking-[-2%] lg:text-[168.82px]/[205px]'
          initial='hidden'
          whileInView='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {developer.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  rotateY: 90,
                  opacity: 0,
                },
                visible: {
                  rotateY: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
              className='inline-block'
              style={{ transformOrigin: 'bottom' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <MotionImage
            src='/assets/Portrait-1.svg'
            alt='Portrait'
            width={375}
            height={450}
            className='absolute -top-39.25 left-5.5 z-20 block h-auto w-93.75 lg:-top-41 lg:left-5.5 lg:w-152.5'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          />
          <motion.span
            className='font-anton absolute top-0 left-0 z-50 text-center text-[92px]/[112.53px] tracking-[-2%] text-transparent [-webkit-text-stroke:1px_#F3B64C] lg:text-[168.82px]/[205px]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
          >
            {developer}
          </motion.span>
        </motion.p>
      </div>
      <motion.p
        className='text-background font-bonheur absolute top-158.75 left-6 z-10 h-20.25 w-29 rotate-[-12.34deg] text-[64.59px]/[80.73px] tracking-[-2%] lg:top-51.5 lg:left-78.25 lg:h-35.5 lg:w-50.5 lg:text-[113.23px]/[141.54px]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
      >
        Junior
      </motion.p>

      <motion.div
        className='radius-full bg-primary-400 border-primary-300 absolute top-138.75 left-31 flex h-8 w-37 items-center gap-1.5 rounded-full border px-4 py-1 lg:top-56.75 lg:left-155.75 lg:h-9.5 lg:w-48.75'
        initial={{ opacity: 0, scale: 0.2, rotate: -360 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
          delay: 3,
        }}
        style={{ perspective: 1000 }}
      >
        <div className='flex size-2 rounded-full bg-[#E26190] lg:size-4' />
        <span className='lg:text-md text-background text-xs font-semibold tracking-[-3%]'>
          Available for Hire
        </span>
      </motion.div>
    </>
  );
};
