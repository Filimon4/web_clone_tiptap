import { useTransform,motion,useAnimationFrame,useMotionValue } from 'framer-motion'
import { useRef } from 'react'

import logo1 from '../../../public/companies_img/logo1.svg'
import logo2 from '../../../public/companies_img/logo2.svg'
import logo3 from '../../../public/companies_img/logo3.svg'
import logo4 from '../../../public/companies_img/logo4.svg'
import logo5 from '../../../public/companies_img/logo5.svg'
import logo6 from '../../../public/companies_img/logo6.svg'
import logo7 from '../../../public/companies_img/logo7.svg'
import logo8 from '../../../public/companies_img/logo8.svg'
import logo9 from '../../../public/companies_img/logo9.svg'

// eslint-disable-next-line react/prop-types
const CompaniesCarousel = ({baseVelocity = 100}) => {
  const baseX = useMotionValue(0)
  const directoinFactor = useRef(-1);
  const x = useTransform(baseX, (v) => {

    return v % 600
  })
  useAnimationFrame((t, delta) => {
    let moveBy = directoinFactor.current * baseVelocity * (delta / 1000)
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className='w-full flex'>
      <motion.div
        className='font-[600] uppercase flex gap-[60px] py-7 justify-center'
        style={{x}}
      >
        <CompaniesStack />
      </motion.div>
    </div>
  )
}

const CompaniesStack = () => {
  return (
    <div className='flex justify-center items-center gap-[2rem] w-[100vw]'>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo1} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo2} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo3} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo4} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo5} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo6} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo7} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo8} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center max-w-full' src={logo9} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo1} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo2} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo3} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo4} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo5} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo6} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo7} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center' src={logo8} alt="" />
      </div>
      <div className='h-[2.5rem] px-[1.5rem] flex-shrink-0'>
        <img className='w-full h-full inline-block self-center max-w-full' src={logo9} alt="" />
      </div>
    </div>
  )
}

export default CompaniesCarousel