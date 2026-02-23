export default function StatementSection() {
  return (
    <>
      <section
        id='about'
        className='flex h-67.5 w-98.25 justify-center gap-2 px-4 py-10 lg:h-73 lg:w-360 lg:gap-2 lg:px-30 lg:py-20'
      >
        <p className='text-display-sm lg:text-display-lg text-center font-medium tracking-[-3%] text-neutral-950 lg:h-33 lg:w-223 lg:tracking-[-2%]'>
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
        </p>
      </section>
      <section className='flex h-153 w-98.25 flex-col items-center gap-4 px-4 py-10 lg:h-94.75 lg:w-360 lg:flex-row lg:gap-10 lg:px-30 lg:py-20'>
        <div className='flex h-39 w-90.25 flex-col gap-3 lg:h-54.75 lg:w-[346.67px]'>
          <div className='flex size-12 items-center justify-center rounded-full border border-neutral-300 px-1.25 py-0.5 lg:size-15.75 lg:px-[6.56px] lg:py-[2.63px]'>
            <img
              src='/assets/icon-Component.png'
              alt='Component'
              className='size-6.25 object-contain lg:size-8'
            />
          </div>
          <p className='lg:text-display-xs text-lg font-bold'>
            COMPONENT-BASED DEVELOPMENT
          </p>
          <p className='font-regular lg:text-md text-sm tracking-[-3%]'>
            Reusable, scalable code built with modern frameworks like React or
            Vue.
          </p>
        </div>
        <div className='h-px w-full border border-neutral-300 lg:h-44 lg:w-px' />

        <div className='flex h-39 w-90.25 flex-col gap-3 lg:h-54.75 lg:w-[346.67px]'>
          <div className='flex size-12 items-center justify-center rounded-full border border-neutral-300 px-1.25 py-0.5 lg:size-15.75 lg:px-[6.56px] lg:py-[2.63px]'>
            <img
              src='/assets/icon-UI.png'
              alt='UI Design'
              className='size-7 object-contain lg:size-9'
            />
          </div>
          <p className='lg:text-display-xs text-lg font-bold'>
            PIXEL-PERFECT UI IMPLEMENTATION
          </p>
          <p className='font-regular lg:text-md text-sm tracking-[-3%]'>
            Translating design into high-fidelity user interfaces with attention
            to detail.
          </p>
        </div>
        <div className='h-px w-full border border-neutral-300 lg:h-44 lg:w-px' />

        <div className='flex h-39 w-90.25 flex-col gap-3 lg:h-54.75 lg:w-[346.67px]'>
          <div className='flex size-12 items-center justify-center rounded-full border border-neutral-300 px-1.25 py-0.5 lg:size-15.75 lg:px-[6.56px] lg:py-[2.63px]'>
            <img
              src='/assets/icon-Mobile.png'
              alt='Mobile'
              className='size-7 object-contain lg:size-9'
            />
          </div>
          <p className='lg:text-display-xs text-lg font-bold'>
            RESPONSIVE & ACCESSIBLE DESIGN
          </p>
          <p className='font-regular lg:text-md text-sm tracking-[-3%]'>
            Optimized layouts that work seamlessly across all screen sizes and
            devices.
          </p>
        </div>
      </section>
    </>
  );
}
