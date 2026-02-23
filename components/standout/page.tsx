'use client';
import { motion } from 'framer-motion';

export default function StandoutSection() {
  return (
    <section className='flex h-304.5 w-98.25 flex-col items-center justify-center gap-2 px-4 py-10 lg:h-230.5 lg:w-360 lg:gap-12 lg:px-30 lg:py-20'>
      <motion.div
        className='flex h-25.5 w-full flex-col gap-2 lg:h-32.5 lg:w-300'
        initial={{ opacity: 0, rotateX: -90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ perspective: 1000, transformOrigin: 'bottom' }}
      >
        <p className='text-display-sm lg:text-display-xl text-center font-bold lg:tracking-[-3%]'>
          More Than Just Code
        </p>
        <p className='lg:text-md text-center text-sm font-medium lg:tracking-[-3%]'>
          We care about design, performance, and user experience all in one.
        </p>
      </motion.div>
      <motion.div
        className='flex h-253 w-full flex-col gap-6 lg:h-155 lg:w-300 lg:flex-row'
        initial='hidden'
        whileInView='visible'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
              // delayChildren: 3,
            },
          },
        }}
        // style={{ transformOrigin: 'bottom' }}
      >
        {/* With Me */}
        <motion.div
          className='py-4xl px-xl bg-secondary-100 flex h-123.5 w-full flex-col items-center gap-6 rounded-2xl lg:h-155 lg:w-147 lg:gap-8 lg:p-8'
          variants={{
            hidden: {
              scaleY: 0,
            },
            visible: {
              scaleY: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: 'bottom' }}
        >
          <div className='flex h-31 w-20.25 flex-col items-center gap-3 text-center lg:h-39 lg:w-25 lg:gap-6'>
            <p className='text-lg font-bold'>With Me</p>
            <div className='bg-primary-300 size-20 overflow-hidden rounded-full lg:size-25'>
              <img
                src='/assets/Portrait-small.svg'
                alt='Portrait'
                className='mt-[5.8px] ml-[12.1px] h-[78.69px] w-[65.31px] object-cover lg:h-26 lg:w-[86.31px]'
              />
            </div>
          </div>
          <div className='flex h-70.5 w-full flex-col items-center gap-3 lg:h-92 lg:w-131 lg:gap-6'>
            <p className='text-md font-semibold text-neutral-950 before:mr-3 before:font-bold before:content-["✓"] lg:text-lg lg:tracking-[-3%]'>
              React Expert
            </p>
            <p className='text-md font-semibold text-neutral-950 before:mr-3 before:font-bold before:content-["✓"] lg:text-lg lg:tracking-[-3%]'>
              Precise Website Implementation
            </p>
            <p className='text-md font-semibold text-neutral-950 before:mr-3 before:font-bold before:content-["✓"] lg:text-lg lg:tracking-[-3%]'>
              TypeScript Proficiency
            </p>{' '}
            <p className='text-md font-semibold text-neutral-950 before:mr-3 before:font-bold before:content-["✓"] lg:text-lg lg:tracking-[-3%]'>
              Clean, Maintainable Code
            </p>{' '}
            <p className='text-md font-semibold text-neutral-950 before:mr-3 before:font-bold before:content-["✓"] lg:text-lg lg:tracking-[-3%]'>
              Responsive Website Development
            </p>
            <p className='text-md font-semibold text-neutral-950 before:mr-3 before:font-bold before:content-["✓"] lg:text-lg lg:tracking-[-3%]'>
              Performance Optimization
            </p>
            <p className='text-md font-semibold text-neutral-950 before:mr-3 before:font-bold before:content-["✓"] lg:text-lg lg:tracking-[-3%]'>
              UI Design Proficiency (Figma)
            </p>
          </div>
        </motion.div>
        {/* Other Talent */}
        <motion.div
          className='py-4xl px-xl bg-background flex h-123.5 w-full flex-col items-center gap-6 rounded-2xl border border-neutral-300 lg:h-155 lg:w-147 lg:gap-8 lg:p-8'
          variants={{
            hidden: {
              scaleY: 0,
            },
            visible: {
              scaleY: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: 'bottom' }}
        >
          <div className='flex h-31 w-full flex-col items-center gap-3 text-center lg:h-39 lg:w-131 lg:gap-6'>
            <p className='text-lg font-bold'>Another Talent</p>
            <div className='size-20 rounded-full lg:size-25'>
              <img
                src='/assets/icon-Portrait.svg'
                alt='Portrait Icon'
                className='size-20 lg:size-25'
              />
            </div>
          </div>
          <div className='flex h-70.5 w-full flex-col items-center gap-3 lg:h-92 lg:w-131 lg:gap-6'>
            <p className='text-md flex items-center font-semibold text-neutral-950 before:mr-3 before:text-lg before:font-semibold before:text-[#E5352D] before:content-["X"] lg:text-lg lg:tracking-[-3%]'>
              Basic React Knowledge
            </p>
            <p className='text-md flex items-center font-semibold text-neutral-950 before:mr-3 before:text-lg before:font-semibold before:text-[#E5352D] before:content-["X"] lg:text-lg lg:tracking-[-3%]'>
              Inconsistent Design Translation
            </p>
            <p className='text-md flex items-center font-semibold text-neutral-950 before:mr-3 before:text-lg before:font-semibold before:text-[#E5352D] before:content-["X"] lg:text-lg lg:tracking-[-3%]'>
              Little to No TypeScript Knowledge
            </p>{' '}
            <p className='text-md flex items-center font-semibold text-neutral-950 before:mr-3 before:text-lg before:font-semibold before:text-[#E5352D] before:content-["X"] lg:text-lg lg:tracking-[-3%]'>
              Unstructured Code
            </p>{' '}
            <p className='text-md flex items-center font-semibold text-neutral-950 before:mr-3 before:text-lg before:font-semibold before:text-[#E5352D] before:content-["X"] lg:text-lg lg:tracking-[-3%]'>
              Inconsistent Responsiveness
            </p>
            <p className='text-md flex items-center font-semibold text-neutral-950 before:mr-3 before:text-lg before:font-semibold before:text-[#E5352D] before:content-["X"] lg:text-lg lg:tracking-[-3%]'>
              Slow and Heavy Websites
            </p>
            <p className='text-md flex items-center font-semibold text-neutral-950 before:mr-3 before:text-lg before:font-semibold before:text-[#E5352D] before:content-["X"] lg:text-lg lg:tracking-[-3%]'>
              No Design Skills
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
