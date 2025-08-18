import { useEffect, useState } from 'react';
import heroImage from '../../assets/hero-image-sample.png';
import outline from '../../assets/Outline.png';
import dots from '../../assets/Dots.png'

const HeroSection = () => {
    // states
    const [currentTalentIndex, setCurrentTalentIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const talents = ['Vue.js', 'React.js', 'AI'];

      // useEffect hook to manage the cycling and fading animation
  useEffect(() => {
    const fadeDuration = 500; // Duration of the fade-in/fade-out animation in milliseconds
    const displayDuration = 1500; // Duration each talent is fully visible in milliseconds

    // Set up an interval to change the talent
    const interval = setInterval(() => {
      setIsFadingOut(true); // Start fading out the current talent

      // After the fade-out duration, update the talent index and start fading in the new talent
      const fadeOutTimer = setTimeout(() => {
        // Calculate the next index, cycling back to 0 if at the end of the array
        setCurrentTalentIndex(prevIndex => (prevIndex + 1) % talents.length);
        setIsFadingOut(false); // Start fading in the new talent
      }, fadeDuration);

      // Cleanup the fadeOutTimer if the component unmounts or the effect re-runs
      return () => clearTimeout(fadeOutTimer);
    }, displayDuration + fadeDuration); // Total time for one cycle (display + fade-out)

    // Cleanup the interval when the component unmounts or the effect dependencies change
    return () => clearInterval(interval);
  }, [talents.length]); // Re-run the effect if the number of talents changes

    return(
        <>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
          {/* left */}
            <div className='flex flex-col justify-center gap-1 lg:gap-2 xl:gap-4 order-2 lg:order-1'>
                <h1 className='text-lg sm:text-xl lg:text-base xl:text-2xl text-white font-bold tracking-wider'>
                    Hi, this is Muhammad Ali and I am a <span className='text-primary'>Frontend Developer</span>
                </h1>
            <p className='text-xs sm:text-sm lg:text-sm xl:text-sm text-gray mt-4 lg:mt-8'>Bringing ideas to life using code powered by:
            <span className={`ms-2 lg:py-1 px-2 lg:px-3 xl:py-2 text-sm lg:text-xl bg-primary/20 text-primary font-bold transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
              {talents[currentTalentIndex]}
            </span>
            </p>
            <a href="#contact" className='border border-primary max-w-fit text-white mt-4 px-2 xl:px-4 py-1 xl:py-2 text-sm lg:text-base hover:bg-primary/20 cursor-pointer inline-block transition-all duration-200'>Contact me!!</a>
          </div>
          {/* right */}
            <div className='w-full lg:w-[47%] order-1 lg:order-2'>
              <div className='relative'>
                <img src={outline} title='outline' className='w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] h-auto absolute left-[17%] top-[10px] sm:top-[15px] md:top-[20px] z-10' />
                <div className='w-full h-full z-40 relative'>
                  <img src={heroImage} title='Muhammad Ali' className='w-full h-auto object-cover' />
                </div>
                <img src={dots} title='dots' className='w-[50px] sm:w-[60px] lg:w-[80px] h-auto absolute right-[5px] sm:right-[20px] bottom-[20px] sm:bottom-[70px] z-50' />
                <div className='px-2 sm:px-3 py-1 sm:py-2 flex flex-row gap-2 sm:gap-4 items-center w-full absolute border border-gray-500'>
                  <div className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] bg-primary'></div>
                  <p className='text-white text-xs sm:text-sm'>Currently working on Python and AI.</p>
                </div>
              </div>
            </div>
        </div>
        </>
    );
}

export default HeroSection;