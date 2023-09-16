import { styles } from '../styles';
import car3 from '../assets/company/car3.png'

const Hero = () => {
  return (
    <>
      <section className='relative w-full mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm<span className='text-[#915eff]'> Rohit </span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> An aspiring web developer with a passion for coding and creating interactive web experiences.</p>
          </div>
        </div>
      </section>
      <div>
        <img src={car3} />
      </div>
    </>
  )
}

export default Hero

