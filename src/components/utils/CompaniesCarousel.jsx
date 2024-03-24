import { motion,useMotionValue,animate } from 'framer-motion';
import { useEffect } from 'react';
import useMeasure from "react-use-measure";

import logo1 from '../../../public/companies_img/logo1.svg';
import logo2 from '../../../public/companies_img/logo2.svg';
import logo3 from '../../../public/companies_img/logo3.svg';
import logo4 from '../../../public/companies_img/logo4.svg';
import logo5 from '../../../public/companies_img/logo5.svg';
import logo6 from '../../../public/companies_img/logo6.svg';
import logo7 from '../../../public/companies_img/logo7.svg';
import logo8 from '../../../public/companies_img/logo8.svg';
import logo9 from '../../../public/companies_img/logo9.svg';

// eslint-disable-next-line react/prop-types
const CompaniesCarousel = () => {

  const xTranslation = useMotionValue(0)

  let [ref, {width}] = useMeasure()
  console.log(width)

  useEffect(() => {
    let finalPosition = (-width / 2) - 16

    animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 45,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })
  }, [width, xTranslation])

  return (
    <div className='w-full flex'>
      <motion.div 
        style={{x: xTranslation}}
        ref={ref}  
        className='flex justify-start items-center text-center w-max '
        >
        <CompaniesStack />
      </motion.div>
      <motion.div 
        style={{x: xTranslation}}
        ref={ref}  
        className='flex justify-start items-center text-center w-max'
        >
        <CompaniesStack />
      </motion.div>
    </div>
  )
}

const CompaniesStack = () => {
  return (
    <div className='flex gap-[2rem]'>
      <LogoImg logo={logo1}/>
      <LogoImg logo={logo2}/>
      <LogoImg logo={logo3}/>
      <LogoImg logo={logo4}/>
      <LogoImg logo={logo5}/>
      <LogoImg logo={logo6}/>
      <LogoImg logo={logo7}/>
      <LogoImg logo={logo8}/>
      <LogoImg logo={logo9}/>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const LogoImg = ({logo}) => {
  return (
    <div className='flex px-[1.5rem] flex-shrink-0'>
        <img className='self-center' src={logo} alt="" width={125} height={50}/>
    </div>  
  )
}

export default CompaniesCarousel