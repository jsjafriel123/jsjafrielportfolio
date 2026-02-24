'use client';
import { animate, motion, stagger } from 'framer-motion';
import { useEffect, useRef } from 'react';

const techs = [
  { url: '/assets/icon-JS.svg', alt: 'Icon JS', className: 'size-[50.92px]' },
  {
    url: '/assets/icon-CSS.svg',
    alt: 'Icon CSS',
    className: 'h-[40.75px] w-[34.72px]',
  },
  {
    url: '/assets/icon-HTML.svg',
    alt: 'Icon HTML',
    className: 'size-[40.5px]',
  },
  {
    url: '/assets/icon-React.svg',
    alt: 'Icon React',
    className: 'h-[39.35px] w-[43.97px]',
  },
];

export const TechsLogo = () => {
  const animateRef = useRef<any>(null);

  useEffect(() => {
    const techs = document.querySelectorAll('.tech');

    animateRef.current = animate(
      techs,
      // { transform: "translateY(-10px)" },  transform collides the initial scaleY styling of the bar
      { scale: [0.8, 1.2] },
      {
        duration: 1,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: stagger(0.3, { startDelay: -0.5 }),
      }
    );
  }, []);

  return (
    <motion.div
      className='border-primary-200 flex h-[408.43] w-28.25 flex-col items-center justify-center gap-[21.78px] rounded-[13613.1px] border'
      initial={{ opacity: 0, scaleY: 0.2 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 5,
        delay: 3,
      }}
      style={{ transformOrigin: 'top' }}
    >
      {techs.map((tech, index) => (
        <div key={index} className='tech'>
          <img src={tech.url} alt={tech.alt} className={tech.className} />
        </div>
      ))}
    </motion.div>
  );
};
