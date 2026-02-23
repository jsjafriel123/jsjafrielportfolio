'use client';

import HeaderComponent from '@/components/header/page';
import HeroSection from '@/components/hero/page';
import StatementSection from '@/components/statement/page';
import TechCarousel from '@/components/techCarousel/page';
import StandoutSection from '@/components/standout/page';
import PortfolioSection from '@/components/portfolio/page';
import ExperienceSection from '@/components/experience/page';
import TestimonySection from '@/components/testimony/page';
import Footer from '@/components/footer/page';
import SummarySection from '@/components/summary/page';
import ContactForm from '@/components/contactForm/page';
export default function Home() {
  return (
    <div className='relative flex flex-col items-center'>
      <HeaderComponent />
      <main className='w-100vh flex flex-col items-center'>
        <HeroSection />
        <StatementSection />
        <TechCarousel />
        <StandoutSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonySection />
        <SummarySection />
        <ContactForm />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
