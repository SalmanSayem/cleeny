import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({serviceImage,serviceIcon,name,feature1,feature2}) => {
  return (
    <div className="relative mb-75">
      <div>
        <img className="w-full" src={serviceImage} alt="" />
      </div>
      <div className=" absolute -bottom-61.25 rounded-tr-md rounded-br-md rounded-bl-md left-0 pt-17 pb-6 px-8 bg-secondary">
        <div className="relative">
          <div className=" absolute left-0 -top-27 flex items-center justify-center w-20 h-20 bg-white rounded-[50%]">
            <img src={serviceIcon} alt="service icon" />
          </div>
          <div >
            <h2 className="text-[24px] leading-8 text-white font-inter font-semibold pb-5">
              {name}
            </h2>
          </div>
          <div className="w-77 border-b border-[#223FA2] pb-6 flex flex-col gap-[11.5px]">
            <p className="text-[16px] leading-6 text-[#B8B9D5] font-poppins flex items-center gap-2">
              <FaCheck className="text-[14px] text-yellow" />
              {feature1}
            </p>
            <p className="text-[16px] leading-6 text-[#B8B9D5] font-poppins flex items-center gap-2">
              <FaCheck className="text-[14px] text-yellow" />
              {feature2}
            </p>
          </div>
          <div className="pt-[24.5px]">
            <a href="#" className="flex items-center gap-2 font-inter font-medium text-white text-[16px] leading-6">Veiw Details<FaArrowRightLong /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
