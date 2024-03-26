import SecHeroTitle from "./utils/SecHeroTitle";
import CompaniesCarousel from './utils/CompaniesCarousel'
import HeaderLight from '../../public/light/header.png'
import arrowSvg from '../../public/arrow.svg'

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center py-[14rem] items-center gap-24 overflow-hidden">
      <div className="absolute flex h-0 justify-center items-center top-[14rem] mt-[5rem] ml-[50%] z-1 right-0">
        <img className="w-[70vw] max-w-[55rem]" src={HeaderLight} sizes="(max-width: 767px) 100vw, (max-width: 991px) 880px, (max-width: 1279px) 70vw, 880px"/>
      </div>
      <div className="flex flex-col items-center justify-center text-center z-20">
        <SecHeroTitle
          title={"The editor suite to build products with"}
          intro={"The editor suite to build products with"}
        />
        <div className="mt-6 max-w-[45rem] text-xl">
          <p>
            Tiptap is an open source headless content editor and real-time
            collaboration framework to craft exactly the content experience
            you’d like to have – built for developers.
          </p>
        </div>
     
        <div className="mt-12 flex items-center gap-[0.6rem] justify-center relative ">
          <a href="/" className={`hover:shadow-button-sign hover:rounded-[1.2rem] hover:translate-x-[-4px] hover:translate-y-[-4px] flex flex-row gap-[0.4rem] overflow-hidden items-center px-5 pt-[0.9rem] pb-[0.7rem] text-white bg-black rounded-[0.9rem] transition-all leading-[1.1] after:content-[''] after:absolute after:left-[-1em] after:h-[0.75em] after:w-[0.75em] after:mt-[-0.2em] after:bg-[${arrowSvg}]`}>
            <div className="text-[1.1rem] font-[400] leading-[1.1]">
              Sign up free
            </div>
            <div className="flex w-[0.75rem] h-[0.75rem] mt-[-0.2rem]">
              <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.9573 14.4066 9.54339 14.8166 9.27313C15.0213 9.13826 15.1862 9.03994 15.2965 8.97705C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89383L15.4495 8.89326L16 8.61803V7.38197Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
          <a href="/" className="px-5 pt-[0.9rem] pb-[0.7rem] rounded-[0.9rem] border-2 border-black transition-all leading-[1.1] hover:rounded-[2rem] hover:shadow-button-try hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem]">
            <div className="text-[1.1rem] font-[400] leading-[1.1]">Try it live</div>
          </a>
        </div>
      </div>
      
      <div className="flex justify-center items-center flex-col gap-6 ">
        <p className="text-sm font-semibold max-x-[90vw]">
          With 20,000+ businesses using Tiptap Editor, there’s a good chance
          we’ve crossed paths.
        </p>
        <CompaniesCarousel />
      </div>
    </div>
  );
};

export default Hero;
