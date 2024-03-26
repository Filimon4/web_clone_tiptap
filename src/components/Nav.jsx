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
            <a className="cursor-pointer px-[1rem] pb-[0.5rem] pt-[0.6rem]">
              Blog
            </a>
            <a className="cursor-pointer px-[1rem] pb-[0.5rem] pt-[0.6rem]">
              Docs
            </a>
            <a className="cursor-pointer px-[1rem] pb-[0.5rem] pt-[0.6rem]">
              Pricing
            </a>
          </div>
          <div className="ml-9 flex items-center">
            <a className="cursor-pointer px-[1rem] pb-[0.5rem] pt-[0.6rem]">
              Log in
            </a>
            <SignButn />
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const NavLink = ({title}) => {

  const variants = {
    visible: {
      "nav-btn::before": {
        opacity: "1",
        transform: "scale(100%)"
      }
    },
    hidden: {
      "nav-btn::before": {
        opacity: '1',
        transform: 'scale(100%)'
      }
    }
  }

  const list = {
    visible: {
    },
    hidden: {
    }
  }

  return (
    <motion.a
      className="cursor-pointer px-[1rem] pb-[0.5rem] pt-[0.6rem] relative"
      variants={list}
      initial='hidden'
      whileHover='visible'
    >
      <motion.div 
        className="nav-btn"
        variants={variants}
        initial="hidden"
        onHoverStart={(e) => console.log(e)}
      />
      {title}
    </motion.a>
  )
}

export default Nav;
