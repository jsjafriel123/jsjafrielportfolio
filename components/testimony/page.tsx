'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
type testicard = {
  id: number;
  rating: string;
  testimony: string;
  name: string;
  title: string;
  photo: string;
};

const cards: testicard[] = [
  {
    id: 0,
    rating: '/assets/image-5Stars.svg',
    testimony: `"Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!"`,
    name: 'Sarah Tan',
    title: 'Product Manager at Finovate',
    photo: '/assets/Testi-Sarah.svg',
  },
  {
    id: 1,
    rating: '/assets/image-5Stars.svg',
    testimony: `“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”`,
    name: 'John Lee',
    title: 'Creative Director at Innovate Corp',
    photo: '/assets/Testi-Lee.svg',
  },
  {
    id: 2,
    rating: '/assets/image-5Stars.svg',
    testimony: `“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”`,
    name: 'Emily Chen',
    title: 'Marketing Head at Tech Solutions',
    photo: '/assets/Testi-Emily.svg',
  },
];

export default function TestimonySection() {
  // const [api, setApi] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
  };

  const prev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <motion.section
      className='bg-background flex h-[815.33px] w-98.25 flex-col items-center gap-6 px-5 py-10 lg:h-[808.33px] lg:w-360 lg:gap-12 lg:px-30 lg:py-20'
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
    >
      {/* Header */}
      <motion.div
        className='h-11xl flex w-88.25 flex-col justify-center gap-2 lg:h-23.5 lg:w-211.75'
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
      >
        <p className='text-display-sm lg:text-display-xl h-19 text-center font-bold tracking-[-2%] text-neutral-950 lg:w-211.75 lg:tracking-[-3%]'>
          What They Say About Working With Me
        </p>
        <p className='lg:text-md text-center text-sm font-medium text-neutral-950 lg:w-211.75 lg:tracking-[-3%]'>
          Real words from clients, teammates, and mentors I've collaborated with
          on various projects.
        </p>
      </motion.div>
      {/* Testimony Carousel */}
      <div className='relative flex h-[571.33px] w-88.25 flex-col items-center justify-between gap-6 lg:h-[506.33px] lg:w-300'>
        <motion.div
          className='lg:h-109.25'
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        >
          {cards.map((card, index) => {
            const offset = index - activeIndex;

            if (offset < 0 || offset > 2) return null;

            const translateY = offset * 30;
            const scale = 1 - offset * 0.0833;
            const zIndex = 10 - offset;
            // const width = `${100 - offset * 4}%`;

            return (
              <section
                key={card.id}
                style={{
                  transform: `translateX(-50%) translateY(${translateY}px) scale(${scale})`,
                  // width,
                  zIndex,
                }}
                className={`absolute top-0 left-1/2 flex h-119.5 w-88.25 flex-col items-center gap-8 rounded-2xl p-6 transition-all duration-500 lg:h-94.5 lg:w-300 lg:gap-8 lg:px-10 lg:py-8 ${offset === 0 ? 'bg-primary-300' : offset === 1 ? 'bg-[#D4A0B3]' : 'bg-[#B76080]/20'}`}
              >
                <div className='flex h-66 w-76.25 flex-col items-center gap-4 lg:h-37 lg:w-280'>
                  <img
                    src='/assets/image-5Stars.svg'
                    alt='5 Stars Rating'
                    className='flex h-6 w-34'
                  />
                  <div>
                    <p className='text-neutral-25 lg:text-display-xs text-center text-lg font-semibold tracking-[-3%]'>
                      {card.testimony}
                    </p>
                  </div>
                  <div className='flex h-33.5 w-76.25 flex-col items-center gap-2'>
                    <img src={card.photo} alt={card.name} className='size-16' />
                    <p className='text-neutral-25 text-center text-lg font-semibold tracking-[-3%]'>
                      {card.name}
                    </p>
                    <p className='text-md text-neutral-25 text-center font-medium tracking-[-3%]'>
                      {card.title}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        </motion.div>

        <motion.div
          className='mt-6xl flex h-[45.33px] w-[102.67px] items-center justify-between gap-3'
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        >
          <Button
            onClick={prev}
            variant={'outline'}
            disabled={activeIndex === 0}
            className='size-[45.33px] rounded-full border border-neutral-300 bg-white p-[10.67px]'
          >
            <img
              src='/assets/icon-arrow-R-black.svg'
              alt='Previous'
              className='size-6 rotate-180'
            />
          </Button>
          <Button
            onClick={next}
            variant={'outline'}
            disabled={activeIndex === cards.length - 1}
            className='size-[45.33px] rounded-full border border-neutral-300 bg-white p-[10.67px]'
          >
            <img
              src='/assets/icon-arrow-R-black.svg'
              alt='Next'
              className='size-6'
            />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
