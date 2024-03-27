import { useState } from "react";
import Logo from "./utils/Logo";
import SignButn from "./utils/SignButn";
import {motion} from 'framer-motion'

const Nav = () => {
  return (
    <div className="fixed m-auto mt-4 flex w-[100vw] justify-center bg-opacity-0 z-50">
      <div className="flex justify-center gap-16 rounded-xl bg-nav pb-[0.4rem] pl-[0.9rem] pr-[0.4rem] pt-[0.4rem] shadow-xs">
        <div className="flex items-center ">
          <a href="/" className="flex h-4">
            <Logo />
          </a>
          <div className="ml-6 flex items-center">
            <NavLink title={"Product"} />
            <NavLink title={"Blog"} />
            <NavLink title={"Docs"} />
            <NavLink title={"Pricing"} />
          </div>
          <div className="ml-9 flex items-center gap-2">
            <NavLink title={"Log in"} />
            <SignButn />
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const NavLink = ({title}) => {
  const [hoverOn, setHoverOn] = useState(false)

  return (
    <motion.a
      className="cursor-pointer px-[1rem] pb-[0.5rem] pt-[0.6rem] relative"
      animate={hoverOn ? 'hover' : 'free'}
      onHoverStart={() => setHoverOn(true)}
      onHoverEnd={() => setHoverOn(false)}
    >
      <motion.div 
        className={`
          nav-btn before:transition-all before:duration-[250ms] before:animate-[cubic-bezier(0.65, 0, 0.35, 1)] 
          ${hoverOn ? 'before:scale-[100%] before:opacity-100' : 'before:scale-[40%] before:opacity-0'}
        `}
        initial="free"
      />
      {title}
    </motion.a>
  )
}

export default Nav;
