'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.section className='flex h-38 w-98.25 flex-col gap-6 bg-[#0A0D12] px-5 py-10 lg:h-22 lg:w-360 lg:flex-row lg:items-center lg:justify-between lg:gap-68.75 lg:px-32 lg:py-6'>
      <motion.div
        className='order-1 flex h-10 w-52 justify-between lg:order-2'
        initial={{ opacity: 0, rotateX: 360 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
        style={{ perspective: 1000, transformOrigin: 'center' }}
      >
        <img
          src='/assets/Social-Media-Icons.svg'
          alt='LinkedIn Icon'
          className='object-cover'
        />
      </motion.div>
      <motion.p
        className='lg:text-md text-neutral-25 order-2 text-xs lg:order-1 lg:tracking-[-3%]'
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 5 }}
        style={{ transformOrigin: 'left' }}
      >
        © 2025 Jeffrey Sjafriel. All rights reserved.
      </motion.p>
    </motion.section>
  );
}
