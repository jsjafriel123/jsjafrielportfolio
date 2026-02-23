export default function Footer() {
  return (
    <section className='flex h-38 w-98.25 flex-col gap-6 bg-[#0A0D12] px-5 py-10 lg:h-22 lg:w-360 lg:flex-row lg:items-center lg:justify-between lg:gap-68.75 lg:px-32 lg:py-6'>
      <div className='order-1 flex h-10 w-52 justify-between lg:order-2'>
        <img
          src='/assets/Social-Media-Icons.svg'
          alt='LinkedIn Icon'
          className='object-cover'
        />
      </div>
      <p className='lg:text-md text-neutral-25 order-2 text-xs lg:order-1 lg:tracking-[-3%]'>
        © 2025 Jeffrey Sjafriel. All rights reserved.
      </p>
    </section>
  );
}
