'use client';
import { motion } from 'framer-motion';

export const Introduction = () => {
  return (
    <motion.div
      className='flex h-44.5 w-90.25 flex-col gap-2 px-1.25 py-0.5 lg:h-55.25 lg:w-112.75 lg:gap-3.5 lg:px-[6.56px] lg:py-[2.63px]'
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            delayChildren: 4,
          },
        },
      }}
    >
      <motion.div
        className='border-primary-300 flex size-12 items-center justify-center rounded-full border-[1.31px] lg:size-15.75'
        variants={{
          hidden: {
            translateY: -100,
            opacity: 0,
          },
          visible: {
            translateY: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
        }}
        style={{ transformOrigin: 'top' }}
      >
        <img
          src='/assets/icon-mic.svg'
          alt='Mic'
          className='h-5 w-3.5 lg:h-[26.25px] lg:w-[18.38px]'
        />
      </motion.div>
      <motion.p
        className='text-background text-md font-bold lg:text-xl'
        variants={{
          hidden: {
            translateY: -100,
            opacity: 0,
          },
          visible: {
            translateY: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5.5,
        }}
        style={{ transformOrigin: 'top' }}
      >
        Hi, I'm Jeffrey Sjafriel
      </motion.p>
      <motion.p
        className='text-background text-sm font-medium lg:text-lg'
        variants={{
          hidden: {
            translateY: -100,
            opacity: 0,
          },
          visible: {
            translateY: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
        }}
        style={{ transformOrigin: 'top' }}
      >
        a frontend developer passionate about creating seamless digital
        experiences that are fast, responsive, and user-friendly.
      </motion.p>
    </motion.div>
  );
};
