'use client';
import { motion } from 'framer-motion';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const techs = [
  {
    key: 1,
    isOdd: true,
    url: '/assets/Icon-HTML.svg',
    name: 'HTML 5',
    description: 'Modern semantic structur web pages with HTML5.',
  },
  {
    key: 2,
    isOdd: false,
    url: '/assets/icon-CSS.svg',
    name: 'CSS',
    description: 'A modern, lightweight, and highly performance UI.',
  },
  {
    key: 3,
    isOdd: true,
    url: '/assets/icon-Tailwind.svg',
    name: 'Tailwind CSS',
    description: 'Utility-first Tailwind CSS for responsive layouts.',
  },
  {
    key: 4,
    isOdd: false,
    url: '/assets/Icon-JS.svg',
    name: 'JavaScript',
    description: 'Interactive JavaScript for dynamic user engagement.',
  },
  {
    key: 5,
    isOdd: true,
    url: '/assets/icon-Typescript.svg',
    name: 'TypeScript',
    description: 'Reducing runtime errors and boosting developer productivity.',
  },
  {
    key: 6,
    isOdd: false,
    url: '/assets/icon-React.svg',
    name: 'React',
    description: 'Dynamic user interfaces using component-based architecture.',
  },
  {
    key: 7,
    isOdd: true,
    url: '/assets/icon-Nextjs.svg',
    name: 'Next.js',
    description: 'Framework with built-in routing and rendering optimizations.',
  },
  {
    key: 8,
    isOdd: false,
    url: '/assets/icon-Shadcn.svg',
    name: 'Shadcn',
    description: 'The Foundation for your Design System.',
  },
  {
    key: 9,
    isOdd: true,
    url: '/assets/icon-Motion.svg',
    name: 'Motion',
    description: 'Smooth animations for enhanced user experience.',
  },
  {
    key: 10,
    isOdd: false,
    url: '/assets/icon-Vue.svg',
    name: 'Vue.js',
    description:
      'Adaptable to simple or complex, enterprise-level applications.',
  },
  {
    key: 11,
    isOdd: true,
    url: '/assets/icon-Angular.svg',
    name: 'Angular',
    description:
      'Building scalable, enterprise-grade single-page applications.',
  },
  {
    key: 12,
    isOdd: false,
    url: '/assets/icon-Svelte.svg',
    name: 'Svelte',
    description: 'Highly optimized, no-runtime-overhead applications.',
  },
];

export default function TechCarousel() {
  return (
    <section id='skill' className='relative'>
      <div className='flex h-[602.33px] w-98.25 flex-col items-center justify-center gap-6 bg-linear-to-t from-[#9E385E]/10 to-[#9E385E]/0 px-5 py-10 lg:h-[660.33px] lg:w-360 lg:gap-12 lg:px-30 lg:py-20'>
        <motion.div
          className='h-11xl w-88.25 gap-2 lg:h-23.5 lg:w-211.75'
          initial={{ opacity: 0, translateX: '-40vh' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 5,
            // delay: 5.5,
          }}
          style={{ transformOrigin: 'left' }}
        >
          <p className='text-display-sm text-center font-bold lg:text-lg'>
            Code, Design, and Everything in Between
          </p>
          <p className='text-center text-sm font-medium lg:text-lg'>
            These are the technologies that power my workflow and bring ideas to
            life.
          </p>
        </motion.div>
        <Carousel className='h-[342.33px] w-full gap-0 overflow-visible lg:w-230'>
          <CarouselContent className='flex items-center overflow-visible pr-2.25 select-none'>
            {techs.map((tech) => (
              <CarouselItem
                key={tech.key}
                className='flex basis-1/2 items-center justify-center overflow-visible py-4 lg:basis-1/4'
              >
                <motion.div
                  className={`flex h-70.25 w-[172.5px] flex-col items-center gap-3 rounded-[100px] px-4 py-10 text-center text-neutral-800 lg:w-53.75 ${tech.isOdd ? 'bg-secondary-100 border-0' : 'bg-neutral-25 border border-neutral-300'} active:cursor-grabbing`}
                  initial={{ opacity: 0, scaleY: 0.2 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    // delay: 5.5,
                  }}
                  style={{ perspective: 1000, transformOrigin: 'center' }}
                >
                  <div className='flex size-15 items-center justify-center rounded-full bg-neutral-100 p-2.5'>
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className='flex size-8.75 object-contain'
                    />
                  </div>
                  <p className='text-md font-semibold lg:text-lg'>
                    {tech.name}
                  </p>
                  <p className='text-sm'>{tech.description}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className='mt-4xl flex items-center justify-center gap-3'>
            <CarouselPrevious className='static translate-y-0 border-neutral-300 p-[10.67px] lg:size-[45.33px]' />
            <CarouselNext className='static translate-y-0 border-neutral-300 p-[10.67px] lg:size-[45.33px]' />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
