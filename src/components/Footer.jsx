import SecFooterTitle from './utils/SecFooterTitle'
import footerLogo from '../../public/light/footer.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center gap-[4rem] pt-[12rem] pb-[8.5rem] bg-footer-bag rounded-t-[3rem] overflow-hidden">
      <div className='relative flex justify-center items-center'>
        <SecFooterTitle title={"Over 20,000 success stories and counting…"} intro={"begin yours today"} />
        <div className='absolute flex justify-center items-center w-0 h-0 z-1'>
          <img className='max-w-[80rem] w-[120vw] blur' src={footerLogo} sizes='(max-width: 1279px) 100vw, 1280px' alt="" />
        </div>
      </div>
      <div className='mt-[2rem] flex flex-col gap-[5rem] z-10'>
        <div className='flex gap-[5rem]'>
          <ul className='flex flex-col gap-[.8rem] text-white items-start font-[550]'>
            <li className='py-[0.2rem]'>Product</li>
            <li className='text-halfwhite'>Editor</li>
            <li className='text-halfwhite'>Collaboration</li>
            <li className='text-halfwhite'>Content AI</li>
            <li className='text-halfwhite'>Documets</li>
            <li className='text-halfwhite'>Pricing</li>
          </ul>
          <ul className='flex flex-col gap-[.8rem] text-white items-start font-[550]'>
            <li className='py-[0.2rem]'>Company</li>
            <li className='text-halfwhite'>Blog</li>
            <li className='text-halfwhite'>About</li>
            <li className='text-halfwhite'>Contact us</li>
          </ul>
          <ul className='flex flex-col gap-[.8rem] text-white items-start font-[550]'>
            <li className='py-[0.2rem]'>Docs</li>
            <li className='text-halfwhite'>Editor</li>
            <li className='text-halfwhite'>Hocuspocus</li>
            <li className='text-halfwhite'>Extensions</li>
            <li className='text-halfwhite'>Examples</li>
          </ul>
          <ul className='flex flex-col gap-[.8rem] text-white items-start font-[550]'>
            <li className='py-[0.2rem]'>Resources</li>
            <li className='text-halfwhite' >Release notes</li>
            <li className='text-halfwhite' >Experiments</li>
            <li className='text-halfwhite' >MIT license</li>
            <li className='text-halfwhite' >Pro license</li>
          </ul>
          <ul className='flex flex-col gap-[.8rem] text-white items-start font-[550]'>
            <li className='py-[0.2rem]'>Connect</li>
            <li className='text-halfwhite'>GitHub</li>
            <li className='text-halfwhite'>Discord</li>
            <li className='text-halfwhite'>LinkedIn</li>
            <li className='text-halfwhite'>X</li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer