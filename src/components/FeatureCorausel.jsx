import SecTitle from "./utils/SecTitle";

const FeatureCorausel = () => {
  return (
    <div className="flex flex-col justify-center py-[8.5rem] items-center text-center">
      <div>
        <SecTitle title={"Build your editor,"} intro={"your way."} />
      </div>
      <div className="max-w-[55rem] mt-[1.8rem] text-[1.6rem]">
        <p>
          Develop your unique editor with Tiptap{"'s"} headless editor framework or
          get a quick start with our free React templates.
        </p>
      </div>
    </div>
  );
};

export default FeatureCorausel;
