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
    <section className='grid h-56.5 w-90.25 grid-cols-[120px_1fr_120px] items-center justify-items-center gap-5 lg:mt-[129.57px] lg:h-142 lg:w-55.5 lg:grid-cols-1 lg:justify-items-start'>
      {/* <div className='flex h-17.25 w-30 flex-col gap-0.75 lg:h-23.25 lg:w-55.5'>
        <p className='text-background text-display-md lg:text-display-2xl font-bold'>
          2+
        </p>
        <p className='lg:text-md text-background text-xs font-semibold'>
          Years Experience
        </p>
      </div> */}
      {stats.map((stat, index) => (
        <>
          <div
            className={`border-primary-300 h-[60.67px] w-px border lg:h-px lg:w-full ${index === 0 ? 'hidden' : index === 2 ? 'hidden lg:flex' : 'flex'}`}
          />
          <div key={index} className='stat'>
            <div className='flex h-17.25 w-30 flex-col gap-0.75 lg:h-23.25 lg:w-full'>
              <p className='text-background text-display-md lg:text-display-2xl font-bold'>
                {stat.value}
              </p>
              <p className='lg:text-md text-background text-xs font-semibold'>
                {stat.label}
              </p>
            </div>
          </div>
        </>
      ))}

      {/* <div className='border-primary-300 hidden border lg:block lg:h-px lg:w-full' />
      <div className='flex h-17.25 w-30 flex-col gap-0.75 lg:h-23.25 lg:w-full'>
        <p className='text-background text-display-md lg:text-display-2xl font-bold'>
          3
        </p>
        <p className='lg:text-md text-background text-xs font-semibold'>
          Project Delivered
        </p>
      </div>
      <div className='border-primary-300 flex h-[60.67px] w-px border lg:h-px lg:w-full' />
      <div className='flex h-17.25 w-30 flex-col gap-0.75 lg:h-23.25 lg:w-full'>
        <p className='text-background text-display-md lg:text-display-2xl font-bold'>
          50
        </p>
        <p className='lg:text-md text-background text-xs font-semibold'>
          Clients Worlwide
        </p>
      </div> */}
      <a
        type='button'
        href='#contact'
        className='bg-secondary-100 col-span-3 flex h-12 w-full cursor-pointer items-center justify-between gap-2 rounded-[100px] py-2 pr-2 pl-4 lg:col-span-1 lg:h-14'
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
      </a>
    </section>
  );
};
