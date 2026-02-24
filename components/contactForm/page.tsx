'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
// import { FormInput } from 'lucide-react';
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email' }),
  message: z.string().min(10, { message: 'Message too short' }),
});
type FormValues = z.infer<typeof formSchema>;
export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <motion.section
      id='contact'
      className='bg-background flex h-[966.46px] w-98.25 flex-col items-center gap-6 px-4 py-10 lg:h-186 lg:w-360 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:p-30'
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.4 },
        },
      }}
    >
      {/* Header */}
      <motion.div
        className='h-59 w-90.25 gap-6 lg:h-76.5 lg:w-135'
        // whileHover={{ skewY: 20, skewX: -50 }}
        style={{ perspective: 1000, transformOrigin: 'left' }}
        variants={{
          hidden: { opacity: 0, skewY: 20, skewX: -50 },
          visible: { opacity: 1, skewY: 0, skewX: 0 },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
          // // delay: 1,
        }}
      >
        <div className='flex h-25.5 w-90.25 flex-col gap-2 text-neutral-950 lg:h-31 lg:w-135'>
          <p className='text-display-sm lg:text-display-xl font-bold tracking-[-2%] lg:tracking-[-3%]'>
            Let's Work Together
          </p>
          <p className='lg:text-md text-sm text-neutral-700 lg:font-medium lg:tracking-[-3%]'>
            Have a project in mind or just want to say hi? Drop me a message —
            I'd love to hear from you.
          </p>
        </div>
        <div className='flex h-27.5 w-90.25 gap-[15.49px] lg:h-35.5 lg:w-116.5 lg:gap-5'>
          <img
            src='/assets/image-portfolio-1.svg'
            alt='Portfolio 1'
            className='size-27.5 lg:size-35.5'
          />
          <img
            src='/assets/image-portfolio-2.svg'
            alt='Portfolio 2'
            className='size-27.5 lg:size-35.5'
          />
          <img
            src='/assets/image-portfolio-3.svg'
            alt='Portfolio 3'
            className='size-27.5 lg:size-35.5'
          />
        </div>
      </motion.div>
      {/* Form */}
      <motion.div
        className='flex h-[626.45] w-90.25 flex-col items-center lg:-mt-[158.45px] lg:h-[662.45] lg:w-153'
        // whileHover={{ skewY: -20, skewX: 50 }}
        style={{ perspective: 1000, transformOrigin: 'right' }}
        variants={{
          hidden: { opacity: 0, skewY: -20, skewX: 50 },
          visible: { opacity: 1, skewY: 0, skewX: 0 },
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 5,
          // // delay: 1,
        }}
      >
        <img
          src='/assets/image-MyCartoon.svg'
          alt='My cartoon'
          className='z-10 -mb-3 h-[170.45px] w-48'
        />
        <div className='bg-background h-114 w-90.25 gap-2 rounded-2xl p-4 shadow-[0px_0px_28px_0px_#C5C5C540] lg:h-126 lg:w-153 lg:p-8'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex h-106 w-82.25 flex-col gap-5 lg:h-110 lg:w-137'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='flex h-19.5 w-full flex-col gap-0.5 lg:h-20.5 lg:gap-1.5'>
                    <FormLabel className='text-sm font-bold text-neutral-950'>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        placeholder='Enter your name'
                        className='focus:border-primary-300 focus:outline-primary-200 h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-950 placeholder:text-neutral-600 lg:h-15'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex h-19.5 w-full flex-col gap-0.5 lg:h-20.5 lg:gap-1.5'>
                    <FormLabel className='text-sm font-bold text-neutral-950'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='Your email'
                        className='focus:border-primary-300 focus:outline-primary-200 h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-950 placeholder:text-neutral-600 lg:h-15'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <textarea
                placeholder='Your Message'
                className='focus:border-primary-300 h-80 w-full rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none lg:h-60'
              /> */}
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem className='flex h-41 w-full flex-col gap-0.5 lg:h-42 lg:gap-1.5'>
                    <FormLabel className='text-sm font-bold text-neutral-950'>
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Enter your message'
                        {...field}
                        className='focus:border-primary-300 focus:outline-primary-200 h-33.5 w-full gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-950 placeholder:text-neutral-600 lg:h-33.5'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                disabled={isSending}
                className='bg-primary-300 hover:bg-primary-400 h-11 w-full gap-1 self-center rounded-full p-2 text-sm font-bold text-white focus:outline-none lg:h-12'
              >
                {isSending ? 'Sending...' : "Let's Talk"}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </motion.section>
  );
}
