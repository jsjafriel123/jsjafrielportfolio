'use client';
// import motion from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqData = [
  {
    key: '01',
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    key: '02',
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I have worked on freelance and remote projects with various clients across different industries.',
  },
  {
    key: '03',
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Yes, I can convert Figma or Sketch designs into clean, pixel-perfect, responsive code using HTML, CSS, and JavaScript.',
  },
  {
    key: '04',
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I collaborate with backend developers and teams to ensure seamless integration of frontend and backend components.',
  },
  {
    key: '05',
    question: 'Are you available for full-time roles?',
    answer:
      'Yes, I am available for full-time roles as well as freelance and remote opportunities.',
  },
  // Add more FAQs as needed
];

export default function SummarySection() {
  return (
    <motion.section
      id='faq'
      className='flex h-208.5 w-98.25 flex-col items-center gap-6 bg-neutral-100 px-4 py-10 lg:h-190.5 lg:w-360 lg:gap-12 lg:px-30 lg:py-20'
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Header */}
      <motion.div
        className='flex h-25.5 w-90.25 flex-col items-center gap-2 text-center text-neutral-950 lg:h-23.5 lg:w-211.75'
        variants={{
          hidden: { opacity: 0, rotateX: 180 },
          visible: { opacity: 1, rotateX: 0 },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
        }}
        style={{ perspective: 1000, transformOrigin: 'center' }}
      >
        <p className='text-display-sm lg:text-display-xl font-bold tracking-[-2%] lg:tracking-[-3%]'>
          Let's Clear Things Up
        </p>
        <p className='lg:text-md text-sm lg:font-medium lg:tracking-[-3%]'>
          I've answered a few questions that usually come up when working with a
          frontend developer like me.
        </p>
      </motion.div>
      {/* Q&A */}
      <Accordion
        type='single'
        collapsible
        // defaultValue='01'
        className='flex h-157 w-90.25 flex-col gap-5 lg:h-115 lg:w-300'
      >
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.key}
            value={faq.key}
            className='group flex h-auto w-90.25 flex-col gap-2 border-none text-neutral-950 lg:w-300 lg:gap-3'
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, rotateX: 180 },
                visible: { opacity: 1, rotateX: 0 },
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 5,
              }}
              style={{ perspective: 1000, transformOrigin: 'center' }}
            >
              <AccordionTrigger className='flex h-16 w-90.25 justify-between gap-3 text-neutral-950 lg:h-8 lg:w-300 lg:overflow-visible'>
                <span className='lg:text-display-xs h-8 w-6.5 text-center text-lg font-semibold tracking-[-3%] lg:w-8'>
                  {faq.key}
                </span>
                <div className='flex h-16 w-71.5 gap-2 lg:h-8 lg:w-190.25 lg:gap-3'>
                  <span className='lg:text-display-xs text-lg font-semibold tracking-[-3%]'>
                    {faq.question}
                  </span>
                </div>
                <div className='bg-primary-300 flex size-8 items-center justify-center rounded-full p-1 group-data-[state=closed]:border group-data-[state=closed]:border-neutral-300 group-data-[state=closed]:bg-white lg:size-12'>
                  <div className='relative h-4 w-4 lg:h-5 lg:w-5'>
                    <span className='bg-foreground absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2' />
                    <span className='bg-foreground absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 transition-transform duration-200 group-data-[state=closed]:scale-y-0' />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className='tracking-0 lg:text-md ml-8.75 h-auto w-71.5 text-sm font-medium text-neutral-700 lg:ml-52.75 lg:h-auto lg:w-190.25 lg:tracking-[-3%]'>
                {faq.answer}
              </AccordionContent>
              <div className='mt-3 h-px w-full bg-neutral-300 lg:group-data-[state=closed]:mt-6 lg:group-data-[state=open]:mt-2' />
            </motion.div>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
