import { MdOutlineStarPurple500 } from "react-icons/md";

const TestimonialCard = ({image, name, degignation, reviweTitle, reviwe}) => {
  return (
    <div className="px-10 pt-14 pb-12 rounded-xl bg-secondary">
      <div className="relative flex items-center gap-5">
        <div>
          <img src={image} alt="Person image" />
        </div>
        <div>
          <div className="flex items-center gap-1 text-yellow">
            <MdOutlineStarPurple500 className="text-[20px]" />
            <MdOutlineStarPurple500 className="text-[20px]" />
            <MdOutlineStarPurple500 className="text-[20px]" />
            <MdOutlineStarPurple500 className="text-[20px]" />
            <MdOutlineStarPurple500 className="text-[20px]" />
          </div>
          <div className="pt-3 pb-1.75">
            <h4 className="font-inter font-medium text-[20px] leading-7 text-white">
              {name}
            </h4>
          </div>
          <div>
            <p className="font-poppins font-medium text-[15px] leading-[22.5px] text-[#788AC6]">
              {degignation}
            </p>
          </div>
        </div>
        <div>
            <img className=" absolute right-0 top-0" src="testi-icon.png" alt="icon" />
        </div>
      </div>
      <div>
        <h4 className="pt-7 pb-5 font-inter font-medium text-[18px] leading-7 text-yellow">
          {reviweTitle}
        </h4>
        <p className="font-poppins font-light text-[16px] leading-6 text-white">
            {reviwe}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
