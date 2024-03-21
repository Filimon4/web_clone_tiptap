import Logo from "./utils/Logo";
import SignButn from "./utils/SignButn";

const Nav = () => {
  return (
    <div className="fixed m-auto mt-4 flex w-[100vw] justify-center bg-opacity-0 z-10">
      <div className="flex justify-center gap-16 rounded-xl bg-nav pb-[0.4rem] pl-[0.9rem] pr-[0.4rem] pt-[0.4rem] shadow-xs">
        <div className="flex items-center ">
          <a href="/" className="flex h-4">
            <Logo />
          </a>
          <div className="ml-6 flex items-center">
            <a className="cursor-pointer px-[1rem] pb-[0.5rem] pt-[0.6rem]">
              Product
            </a>
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

export default Nav;
