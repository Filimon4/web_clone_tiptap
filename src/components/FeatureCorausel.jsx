import SecTitle from "./utils/SecTitle";
import usecase1 from '../../public/usecases/logo1.png' 
import usecase2 from '../../public/usecases/logo2.png'
import usecase3 from '../../public/usecases/logo3.png'
import usecase4 from '../../public/usecases/logo4.png'
import usecase5 from '../../public/usecases/logo5.png'
import usecase6 from '../../public/usecases/logo6.png'
import lightcarousel from '../../public/light/carousel.png'
import img1 from '../../public/features/img1.png'
import img2 from '../../public/features/img2.png'
import img3 from '../../public/features/img3.png'
import img4 from '../../public/features/img4.png'
import img5 from '../../public/features/img5.png'
import img6 from '../../public/features/img6.png'
import img7 from '../../public/features/img7.png'
import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const FeatureCorausel = () => {
  const carouselCards = useRef()
  const carouselImgs = useRef()
  const [cardIndex, setCardIndex] = useState(3)
  const [shiftMove, setShiftMove] = useState(0)

  const handleClickedCard = (e) => {
    const allCards = carouselCards.current.querySelectorAll('[data-id]')
    const imgsElement = carouselImgs.current.querySelectorAll('[data-id]') 
    const cardElement = e.target.closest('[data-id]')
    const {id} = cardElement.dataset
    
    let choosenCard;
    let rootCard;
    for (let item of allCards) {
      const {id: idElem, selector} = item.dataset
      if (selector >= 0 && idElem === id) {
        choosenCard = item;
        break;
      }
    }
    for (let item of allCards) {
      const {selector} = item.dataset
      if (selector == 3) {
        rootCard = item;
        break;
      }
    }
    const nextBounding = choosenCard.getBoundingClientRect()
    const rootBounding = rootCard.getBoundingClientRect()
    const divToCenter = (rootBounding.left + rootBounding.width/2) - (nextBounding.left + nextBounding.width / 2)
    
    setShiftMove(divToCenter)
    setTimeout(() => {
      setCardIndex(id)
    }, 200)

    for (let img of imgsElement) {
      const {id: imgId} = img.dataset
      img.classList.remove("opacity-0")
      if (imgId == id) {
        img.classList.add("opacity-1")
      } else {
        img.classList.add("opacity-0")
      }
    }
  }

  return (
    <div className="flex flex-col justify-center py-[8.5rem] items-center text-center gap-[5rem] overflow-hidden" >
      <div>
        <SecTitle title={"Build your editor,"} intro={"your way."} />
      </div>
      <div className="max-w-[55rem] mt-[1.8rem] text-[1.6rem]">
        <p>
          Develop your unique editor with Tiptap{"'s"} headless editor framework or
          get a quick start with our free React templates.
        </p>
      </div>
      <section className="relative flex flex-col gap-[2rem] z-10 py-[1rem] items-center">
        <div className="w-max z-10">
          <motion.div 
            className="flex w-max items-stretch justify-center"
            initial={{translateX: '0px'}}
            animate={{
              translateX: `${shiftMove}px`
            }}
            transition={{
              ease: 'easeOut',
              duration: '0.2'
            }}
            ref={carouselCards}
          >
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'0'} title={'AI copywriter'} status={'In Development'} logo={usecase5} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'1'} title={'Synced whiteboard'} status={'Planned'} logo={usecase6} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'2'} title={'Notion like editord'} status={'Launched'} logo={usecase1} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'3'} title={'Block editor'} status={'Planned'} logo={usecase2} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'4'} title={'Chat interface'} status={'Planned'} logo={usecase2} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'5'} title={'Website builder'} status={'Planned'} logo={usecase3} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'6'} title={'Collaborative todo list'} status={'Planned'} logo={usecase4} />

            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} selector={'0'} id={'0'} title={'AI copywriter'} status={'In Development'} logo={usecase5} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} selector={'1'} id={'1'} title={'Synced whiteboard'} status={'Planned'} logo={usecase6} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} selector={'2'} id={'2'} title={'Notion like editord'} status={'Launched'} logo={usecase1} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} selector={'3'} id={'3'} title={'Block editor'} status={'Planned'} logo={usecase2} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} selector={'4'} id={'4'} title={'Chat interface'} status={'Planned'} logo={usecase2} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} selector={'5'} id={'5'} title={'Website builder'} status={'Planned'} logo={usecase3} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} selector={'6'} id={'6'} title={'Collaborative todo list'} status={'Planned'} logo={usecase4} />

            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'0'} title={'AI copywriter'} status={'In Development'} logo={usecase5} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'1'} title={'Synced whiteboard'} status={'Planned'} logo={usecase6} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'2'} title={'Notion like editord'} status={'Launched'} logo={usecase1} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'3'} title={'Block editor'} status={'Planned'} logo={usecase2} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'4'} title={'Chat interface'} status={'Planned'} logo={usecase2} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'5'} title={'Website builder'} status={'Planned'} logo={usecase3} />
            <FeatureCard cardIndex={cardIndex} onClick={handleClickedCard} id={'6'} title={'Collaborative todo list'} status={'Planned'} logo={usecase4} />
          </motion.div>
        </div>

        <div className="w-[90vw] max-w-[50rem] flex justify-center items-center">
          <div className="z-1 absolute flex justify-center items-center w-0 h-0 flex-none top-auto bottom-auto left-auto right-auto">
            <div className="relative flex justify-center items-center">
              <img className="w-[120vw] max-w-[80rem] blur-[6px] flex-none relative" sizes="(max-width: 1279px) 100vw, 1280px" src={lightcarousel} />
            </div>
          </div>
          <div className="z-50 px-0 w-full relative">
            <div ref={carouselImgs} className="flex items-stretch justify-start overflow-hidden">
              <div data-id={'0'} className="transition-opacity opacity-0 flex-none translate-x-[0]">
                <img sizes="(max-width: 767px) 90vw, 640px" src={img1} alt="" />
              </div>
              <div data-id={'1'} className="transition-opacity opacity-0 flex-none translate-x-[-100%]">
                <img sizes="(max-width: 767px) 90vw, 640px" src={img2} alt="" />
              </div>
              <div data-id={'2'} className="transition-opacity opacity-0 flex-none translate-x-[-200%]">
                <img sizes="(max-width: 767px) 90vw, 640px" src={img3} alt="" />
              </div>
              <div data-id={'3'} className="transition-opacity opacity-1 flex-none translate-x-[-300%]">
                <img sizes="(max-width: 767px) 90vw, 640px" src={img4} alt="" />
              </div>
              <div data-id={'4'} className="transition-opacity opacity-0 flex-none translate-x-[-400%]">
                <img sizes="(max-width: 767px) 90vw, 640px" src={img5} alt="" />
              </div>
              <div data-id={'5'} className="transition-opacity opacity-0 flex-none translate-x-[-500%]">
                <img sizes="(max-width: 767px) 90vw, 640px" src={img6} alt="" />
              </div>
              <div data-id={'6'} className="transition-opacity opacity-0 flex-none translate-x-[-600%]">
                <img sizes="(max-width: 767px) 90vw, 640px" src={img7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const FeatureCard = ({title, logo, status, id, onClick, selector="-1", cardIndex}) => {
  return (
    <div onClick={onClick} data-selector={selector} data-id={String(id)} className={`cursor-pointer z-10 transition-all duration-75 flex flex-col gap-[0.6rem] px-[1.5rem] py-[1rem] mx-[0.75rem] ${cardIndex == selector && "bg-cardback shadow-card rounded-lg"}`}>
      <div className=" flex justify-center">
        <img src={logo} className="w-[1.2rem] h-[1.2rem]" />
      </div>
      <div className="flex gap-[0.3rem] items-center flex-col">
        <div className="text-[0.8rem] font-[800] text-nowrap">{title}</div>
        <div className="rounded-[6px] px-[0.3rem] pt-[0.15rem] text-nowrap pb-[0.05rem] font-[300] text-[0.6rem] border-[1px] border-solid border-halfwhite">{status}</div>
      </div>
    </div>
  )
}

export default FeatureCorausel;
