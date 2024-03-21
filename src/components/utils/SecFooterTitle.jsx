// eslint-disable-next-line react/prop-types
const SecFooterTitle = ({ title, intro }) => {
  return (
    <div className="m-auto flex max-w-[42rem] flex-col items-center justify-center font-semibold z-10">
      <h1 className="text-[3rem] text-white">
        {title}
        <br />
        <span className="font-['Cirka'] text-[1.1em] font-normal text-white">{intro}</span>
      </h1>
    </div>
  );
};

export default SecFooterTitle;
