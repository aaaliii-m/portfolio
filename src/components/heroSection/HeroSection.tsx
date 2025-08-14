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
        <div className="flex flex-row gap-4 justify-between">
          {/* left */}
            <div className='flex flex-col justify-center gap-1 lg:gap-2 xl:gap-4'>
                <h1 className='xl:text-2xl lg:text-base text-white font-bold tracking-wider'>
                    Hi, this is Muhammad Ali and I am a <span className='text-primary'>Frontend Developer</span>
                </h1>
            <p className='xl:text-base text-gray mt-8 mb-4'>Bringing ideas to life using code powered by:
            <span className={`ms-2 lg:py-1 px-3 xl:py-2 lg:text-sm xl:text-base bg-primary text-background font-bold transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
              {talents[currentTalentIndex]}
            </span>
            </p>
            <a href="#contact" className='border border-primary max-w-fit text-white px-2 xl:px-4 py-1 xl:py-2 xl:text-base hover:bg-primary hover:text-white cursor-pointer inline-block'>Contact me!!</a>
          </div>
          {/* right */}
            <div className='w-full md:w-[60%] xl:w-[75%]'>
              <div className='relative'>
                <img src={outline} title='outline' className='w-[140px] h-auto absolute left-[-20px] top-[20px] z-10' />
                <img src={heroImage} title='Muhammad Ali' className='z-40 relative w-full h-auto object-cover' />
                <img src={dots} title='dots' className='w-[100px] h-auto absolute right-[20px] bottom-[-30px] z-50' />
                <div className='px-3 py-2 flex flex-row gap-4 items-center w-full absolute bottom-[-60px]'>
                  <div className='w-[20px] h-[20px] bg-primary'></div>
                  <p className='text-white text-sm'>Currently working on Python and AI.</p>
                </div>
              </div>
            </div>
        </div>
        </>
    );
}

export default HeroSection;