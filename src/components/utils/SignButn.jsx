import {motion} from 'framer-motion'
import { useState } from 'react';

const SignButn = () => {
  const [hoverOn, setHoverOn] = useState(false)

  return (
    <div className='relative bg-black rounded-[0.9rem] hover:rounded-[1.2rem] transition-all'>
      <motion.a
        href="/"
        className={`
        text-white  flex flex-row items-center gap-[0.4rem] overflow-hidden
          px-5 pb-[0.7rem] pt-[0.9rem] leading-[1.1]  
          sing-in ${hoverOn ? "after:translate-x-[2rem]" : "after:translate-x-[0rem]"} after:transition-all after:duration-300
        `}
        initial="free"
        animate={hoverOn ? 'hover' : 'free'}
        variants={{
          "hover": {
            after: {
              transform: 'translate(2rem)'
            }
          },
          "free": {
            after: {
              transform: 'translate(0rem)'
            }
          }
        }}
        onHoverStart={() => setHoverOn(true)}
        onHoverEnd={() => setHoverOn(false)}
      >
        <motion.div 
          className="text-[1.1rem] font-[400] leading-[1.1]"
          variants={{
            "hover": {
              transform: "translate(1rem)"
            },
            "free": {
              transform: "translate(0rem)"
            }
          }}
        >
          Sign up free
        </motion.div>
        <motion.div 
          className="mt-[-0.2rem] flex h-[0.75rem] w-[0.75rem]"
          variants={{
            "hover": {
              transform: 'translate(2rem)'
            },
            "free": {
              transform: 'translate(0rem)'
            }
          }}
        >
          <svg
            width="1em" height="1em" viewBox="0 0 16 16"
            fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.9573 14.4066 9.54339 14.8166 9.27313C15.0213 9.13826 15.1862 9.03994 15.2965 8.97705C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89383L15.4495 8.89326L16 8.61803V7.38197Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default SignButn;
