import { Statistics } from './Statistics';
import { TechsLogo } from './Techs';
import { Introduction } from './Introduction';
import { HeroImage } from './HeroImage';
import { HeroImageCopy } from './HeroImage-copy';

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative flex h-257 w-98.25 flex-col justify-normal overflow-hidden bg-[url("/assets/background-Hero.svg")] bg-cover bg-center px-4 lg:h-256 lg:w-360 lg:flex-row lg:justify-between lg:px-30'
    >
      <div className='mt-22 flex h-107.25 w-full flex-col justify-normal gap-6.25 lg:mt-[107.57px] lg:h-[727.43px] lg:flex-row lg:justify-between lg:gap-0'>
        <div className='flex flex-col lg:h-[727.43px] lg:w-112.75 lg:justify-between'>
          {/* Techs */}
          <div className='hidden lg:block'>{TechsLogo()}</div>
          {/* Anouncement */}
          <Introduction />
        </div>
        {/* Statistics */}
        <Statistics />
      </div>
      {/* Hero Image */}
      <HeroImage />
    </section>
  );
}
