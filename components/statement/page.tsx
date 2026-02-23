'use client';
import { motion } from 'framer-motion';

const statements = [
  {
    url: '/assets/icon-Component.png',
    alt: 'Component',
    title: 'COMPONENT-BASED DEVELOPMENT',
    description:
      'Reusable, scalable code built with modern frameworks like React or Vue.',
  },
  {
    url: '/assets/icon-UI.png',
    alt: 'UI Design',
    title: 'PIXEL-PERFECT UI IMPLEMENTATION',
    description:
      'Translating design into high-fidelity user interfaces with attention to detail.',
  },
  {
    url: '/assets/icon-Mobile.png',
    alt: 'Mobile',
    title: 'RESPONSIVE & ACCESSIBLE DESIGN',
    description:
      'Optimized layouts that work seamlessly across all screen sizes and devices.',
  },
];
export default function StatementSection() {
  return (
    <>
      <section
        id='about'
        className='flex h-67.5 w-98.25 justify-center gap-2 px-4 py-10 lg:h-73 lg:w-360 lg:gap-2 lg:px-30 lg:py-20'
      >
        <motion.p
          className='text-display-sm lg:text-display-lg text-center font-medium tracking-[-3%] text-neutral-950 lg:h-33 lg:w-223 lg:tracking-[-2%]'
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 5,
            // delay: 5.5,
          }}
          style={{ perspective: 1000, transformOrigin: 'top' }}
        >
          As frontend developers , we bring designs to life with{' '}
          <span className='text-primary-300'>
            {' '}
            clean<span className='text-neutral-950'>,</span> responsive code
          </span>{' '}
          that blends creativity{' '}
          <span role='img' aria-label='creativity'>
            🎨
          </span>{' '}
          with usability{' '}
          <span role='img' aria-label='usability'>
            🌟
          </span>
          .
        </motion.p>
      </section>
      <motion.section
        className='flex h-153 w-98.25 flex-col items-center gap-4 px-4 py-10 lg:h-94.75 lg:w-360 lg:flex-row lg:gap-10 lg:px-30 lg:py-20'
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
        style={{ perspective: 1000, transformOrigin: 'bottom' }}
      >
        {statements.map((statement, index) => (
          <>
            <motion.div
              className={`h-px w-full border border-neutral-300 lg:h-44 lg:w-px ${index === 0 ? 'hidden' : 'block'}`}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 5,
                delay: 1,
              }}
            />
            <motion.div
              key={index}
              className='flex h-39 w-90.25 flex-col gap-3 lg:h-54.75 lg:w-[346.67px]'
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
            >
              <div className='flex size-12 items-center justify-center rounded-full border border-neutral-300 px-1.25 py-0.5 lg:size-15.75 lg:px-[6.56px] lg:py-[2.63px]'>
                <img
                  src={statement.url}
                  alt={statement.alt}
                  className='size-6.25 object-contain lg:size-8'
                />
              </div>
              <p className='lg:text-display-xs text-lg font-bold'>
                {statement.title}
              </p>
              <p className='font-regular lg:text-md text-sm tracking-[-3%]'>
                {statement.description}
              </p>
            </motion.div>
          </>
        ))}
      </motion.section>
    </>
  );
}
