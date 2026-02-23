'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '3', label: 'Project Delivered' },
  { value: '50', label: 'Clients Worlwide' },
];

export const Statistics = () => {
  return (
    <motion.section
      className='grid h-56.5 w-90.25 grid-cols-[120px_1fr_120px] items-center justify-items-center gap-5 perspective-midrange lg:mt-[129.57px] lg:h-142 lg:w-55.5 lg:grid-cols-1 lg:justify-items-start'
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 3,
          },
        },
      }}
    >
      {stats.map((stat, index) => (
        <>
          <motion.div
            className={`border-primary-300 h-[60.67px] w-px border lg:h-px lg:w-full ${index === 0 ? 'hidden' : index === 2 ? 'hidden lg:flex' : 'flex'}`}
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
              duration: 0.5,
              ease: 'easeOut',
            }}
            style={{ transformOrigin: 'bottom' }}
          />
          <motion.div
            key={index}
            className='h-full w-full'
            variants={{
              hidden: {
                rotateX: 90,
                rotateZ: 90,
                opacity: 0,
              },
              visible: {
                rotateX: 0,
                rotateZ: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            style={{ transformOrigin: 'bottom' }}
          >
            <div className='flex h-17.25 w-30 flex-col gap-0.75 lg:h-23.25 lg:w-full'>
              <p className='text-background text-display-md lg:text-display-2xl font-bold'>
                {stat.value}
              </p>
              <p className='lg:text-md text-background text-xs font-semibold'>
                {stat.label}
              </p>
            </div>
          </motion.div>
        </>
      ))}

      <motion.a
        type='button'
        href='#contact'
        className='bg-secondary-100 col-span-3 flex h-12 w-full cursor-pointer items-center justify-between gap-2 rounded-[100px] py-2 pr-2 pl-4 lg:col-span-1 lg:h-14'
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.2,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
          delay: 5.5,
        }}
        style={{ perspective: 1000, transformOrigin: 'bottom' }}
      >
        <span className='text-md font-semibold text-neutral-950'>
          Contact Me
        </span>
        <div className='flex size-9 items-center justify-center rounded-full bg-neutral-950'>
          <img
            src='/assets/icon-Arrow-Right.svg'
            alt='Contact Me'
            className='size-[11.67px]'
          />
        </div>
      </motion.a>
    </motion.section>
  );
};
