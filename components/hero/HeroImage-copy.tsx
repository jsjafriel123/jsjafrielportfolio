export const HeroImageCopy = () => {
  return (
    <>
      <div className='radius-full bg-primary-400 border-primary-300 absolute top-138.75 left-31 flex h-8 w-37 items-center gap-1.5 rounded-full border px-4 py-1 lg:top-56.75 lg:left-155.75 lg:h-9.5 lg:w-48.75'>
        <div className='flex size-2 rounded-full bg-[#E26190] lg:size-4' />
        <span className='lg:text-md text-background text-xs font-semibold tracking-[-3%]'>
          Available for Hire
        </span>
      </div>
      <div className='absolute top-163 left-4.5 h-[218.94px] w-[357.1px] grid-cols-1 grid-rows-1 lg:top-64.75 lg:left-97.75 lg:h-99.5 lg:w-164.5'>
        <p className='font-anton text-secondary-100 absolute text-center text-[102px]/[125.15px] tracking-[-2%] lg:text-[187.76px]/[228px]'>
          FRONTEND
        </p>
        <p className='font-anton text-secondary-100 absolute bottom-0 text-center text-[92px]/[112.53px] tracking-[-2%] after:absolute after:top-0 after:left-0 after:z-2 after:text-transparent after:content-["DEVELOPER"] after:[-webkit-text-stroke:1px_#F3B64C] lg:text-[168.82px]/[205px]'>
          DEVELOPER
        </p>
      </div>
      <p className='text-background font-bonheur absolute top-158.75 left-6 z-10 h-20.25 w-29 rotate-[-12.34deg] text-[64.59px]/[80.73px] tracking-[-2%] lg:top-51.5 lg:left-78.25 lg:h-35.5 lg:w-50.5 lg:text-[113.23px]/[141.54px]'>
        Junior
      </p>
      <img
        src='/assets/Portrait-1.svg'
        alt='Portrait'
        className='absolute top-144 left-4.75 h-113 w-93.75 bg-amber-200 lg:top-72.25 lg:left-103.75 lg:h-183.75 lg:w-152.5'
      />
    </>
  );
};
