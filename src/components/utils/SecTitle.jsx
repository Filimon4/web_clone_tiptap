// eslint-disable-next-line react/prop-types
const SecTitle = ({ title, intro }) => {
  return (
    <div className="m-auto flex max-w-[66rem] flex-col items-center justify-center font-semibold">
      <h2 className="text-6xl">
        {title}
        <br />
        <span className="font-['Cirka'] text-[1.1em] font-normal">{intro}</span>
      </h2>
    </div>
  );
};

export default SecTitle;
