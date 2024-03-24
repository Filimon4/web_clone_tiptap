import { useMotionValue } from 'framer-motion';
import { animate } from 'framer-motion';
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';

const CarouselWords = () => {
  return (
    <div className="flex flex-col overflow-hidden my-[8.5rem]">
      <CarouselLeftWord word={"Headless"} duration={50} />
      <CarouselRightWord word={"Your unique UX"} duration={42} />
      <CarouselLeftWord word={"Easy to integrate"} duration={48} />
      <CarouselRightWord word={"Creative control"} duration={47} />
      <CarouselLeftWord word={"Extend and Adapt"} duration={55}/>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const CarouselRightWord = ({word, duration = 7}) => {
  const xTranslation = useMotionValue(0)
  let [ref, {width}] = useMeasure()

  useEffect(() => {
    let controls;
    const finalPosition = (width / 2 - 16)

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })
  }, [xTranslation, width])
  
  return (
    <motion.div
      ref={ref}
      style={{x: xTranslation}}
      className='w-max'
    >
      <div className={`text-[10rem] font-[700] leading-[0.9] gap-8 flex justify-end translate-x-[-50%]`}>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
      </div>
    </motion.div>
  );
};

// eslint-disable-next-line react/prop-types, no-unused-vars
const CarouselLeftWord = ({ word, duration = 7 }) => {
  const xTranslation = useMotionValue(0)
  let [ref, {width}] = useMeasure()

  useEffect(() => {
    let controls;
    const finalPosition = (-width / 2 - 16)

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })
  }, [xTranslation, width])
  
  return (
    <motion.div
      ref={ref}
      style={{x: xTranslation}}
      className='w-max'
    >
      <div className={`text-[10rem] font-[700] leading-[0.9] gap-8 flex justify-end`}>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
        <span className=" text-footer-bag">{word}</span>
        <span className=" text-white" style={{"-webkit-text-stroke-width": "0.075rem", "-webkit-text-stroke-color": "rgb(0,0,0)",}}>{word}</span>
      </div>
    </motion.div>
  );
};

export default CarouselWords;
