// import Typewriter from "typewriter-effect";

// eslint-disable-next-line react/prop-types
const SecHeroTitle = ({ title }) => {
  return (
    <div className="m-auto flex max-w-[66rem] flex-col items-center justify-center font-semibold">
      <h1 className="text-7xl">
        {title}
        <br />
        <span className="font-['Cirka'] text-[1.1em] font-thin">
          {/* <Typewriter
            options={{
              strings: [
                "real-time synchronisation",
                "amazing content experience",
                "whiteboard collaboration",
                "whiteboard collaboration",
                "AI-powered content",
                "version control efficiency",
              ],
              autoStart: true,
              loop: true,              
            }}
          /> */}
        </span>
      </h1>
    </div>
  );
};

export default SecHeroTitle;
