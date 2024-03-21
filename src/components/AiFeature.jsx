import SecTitle from "./utils/SecTitle";
import Card from './utils/Card'

const AiFeature = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5rem] py-[8.5rem] text-center">
      <div>
        <SecTitle title={"Supercharge your"} intro={"content experience"} />
        <div className="mt-[1.8rem] max-w-[55rem] text-[1.6rem]">
          <p>
            From AI text creation to real-time collaboration and robust document
            management, Tiptap offers an all-in-one platform for your content
            needs – available on-premises or as a cloud service.
          </p>
        </div>
      </div>
      <div className="max-w-[60vw] w-[90vw]">
        <div className="flex items-stretch justify-start w-full">
          <Card
            title={"Editor"}
            desc={
              "Build custom editors that align perfectly with your user's needs, offering flexibility and ease of use. Ideal for creating user-centric interfaces with minimal fuss."
            }
            id={1}
          />
          <Card
            title={"Collaboration"}
            desc={
              "Build custom editors that align perfectly with your user's needs, offering flexibility and ease of use. Ideal for creating user-centric interfaces with minimal fuss."
            }
            id={2}
          />
          <Card
            title={"Content AI"}
            desc={
              "Help your users perfecting their tone and crossing language barriers, Tiptap's Content AI transforms words into wonders. Write, refine, and captivate with ease."
            }
            id={3}
          />
          <Card
            title={"Documents"}
            desc={
              "Self-host your documents for full control, or opt for our secure, scalable cloud. Create and manipulate your documents any way you want, whether you're flying solo or on Cloud 9."
            }
            id={4}
          />
        </div>
      </div>
    </div>
  );
};

export default AiFeature;
