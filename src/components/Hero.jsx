import SecHeroTitle from "./utils/SecHeroTitle";
// import CompaniesCarousel from './utils/CompaniesCarousel'
import HeaderLight from '../../public/light/header.png'

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center py-[14rem] items-center gap-24">
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
     
        <div className="mt-12">
          <a href="/">Test</a>
          <a href="/">Test</a>
        </div>
      </div>
      
      <div className="flex justify-center items-center flex-col gap-6">
        <p className="text-sm font-semibold max-x-[90vw]">
          With 20,000+ businesses using Tiptap Editor, there’s a good chance
          we’ve crossed paths.
        </p>
        {/* <CompaniesCarousel /> TODO */}
      </div>
    </div>
  );
};

export default Hero;
