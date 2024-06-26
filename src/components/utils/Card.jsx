import logo1 from "../../../public/ai_img/logo1.svg";
import logo2 from "../../../public/ai_img/logo2.svg";
import logo3 from "../../../public/ai_img/logo3.svg";
import logo4 from "../../../public/ai_img/logo4.svg";
const images = [logo1, logo2, logo3, logo4]

// eslint-disable-next-line react/prop-types
const Card = ({ title, desc, id }) => {
  const img = images[(id-1)]
  return (
    <div className="flex-none w-[33.33%] mx-[.7rem]">
      <a className="flex flex-col justify-between items-start p-[2rem] rounded-[1.5rem] bg-white w-full h-full gap-[2rem]" href="/">
        <div>
          <img src={img} alt="some image" width={40} height={40} />
        </div>
        <div className="flex flex-col text-start justify-between gap-[0.75rem]">
          <h3 className="text-[1.5rem] font-semibold">{title}</h3>
          <p className="text-[1.3rem] text-halfwhite font-[500]">{desc}</p>
        </div>
        <div className="flex items-center gap-3 py-[0.9rem]">
          <p className="font-bold">Learn more</p>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523C13.8417 9.9573 14.4066 9.54339 14.8166 9.27313C15.0213 9.13826 15.1862 9.03994 15.2965 8.97705C15.3516 8.94562 15.393 8.92311 15.4188 8.90937L15.4455 8.89535L15.4484 8.89383L15.4495 8.89326L16 8.61803V7.38197Z"
              fill="currentColor"
              ></path>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Card;
