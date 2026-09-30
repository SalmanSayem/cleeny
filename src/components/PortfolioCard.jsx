import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";



const PortfolioCard = ({image, location, name}) => {
  return (
    <div className="relative group">
      <div className="">
        <img className="w-full" src={image} alt="portfolio-img" />
      </div>
      <div className="bg-blue pt-7 pl-7.5 pb-8 pr-5.5 rounded-md border-b-4 border-yellow flex gap-20 items-center justify-between absolute left-0 bottom-0 opacity-0 group-hover:opacity-100 duration-300">
        <div>
          <p className=" flex items-center gap-2.5 font-inter text-white text-[14px] leading-5 pb-[15.5px]"><FaLocationDot className="text-[16px]"/>{location}</p>
          <h4 className="font-inter font-semibold text-[24px] leading-8 text-white">{name}</h4>
        </div>
        <div className="w-16.25 h-16.25 flex items-center justify-center">
            <div className="w-10 h-10 rounded-[50%] bg-yellow -rotate-45 flex items-center justify-center" >
                <FaArrowRight/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
