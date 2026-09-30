import { FaCheck } from "react-icons/fa6";
import ButtonBlueWicon from "./ButtonBlueWicon";

const PlanCard = ({price, PlanName, Feature1, Feature2, Feature3, Feature4, Feature5}) => {
  return (
    <div className="pt-33 pb-10 pr-7.5 bg-[#F4F5F9] relative rounded-xl">
      <div className="py-[16.5px] px-[23.5px] bg-blue text-center rounded-[0_12px_12px_12px] absolute -top-6 left-1/2 -translate-x-1/2">
        <h4 className="flex gap-1 font-inter font-semibold text-white text-[20px] leading-7 items-baseline justify-center">$<span className="text-[43px] leading-15.75">{price}</span></h4>
        <p className=" font-inter text-[16px] leading-6 text-white">Monthly</p>
      </div>
      <div className="px-10 py-2 bg-white rounded-[0_9999px_9999px_0] inline-block border-l-3 border-blue">
        <h5 className="font-inter font-semibold text-[22px] leading-8.25 text-primary">{PlanName}</h5>
      </div>
      <div className="pt-8 pb-5 pl-7.5 flex flex-col gap-3">
        <p className="font-poppins text-[15px] leading-[22.5px] text-secondary flex items-center gap-2"><FaCheck className="text-blue text-[17.5px]"/>{Feature1}</p>
        <p className="font-poppins text-[15px] leading-[22.5px] text-secondary flex items-center gap-2"><FaCheck className="text-blue text-[17.5px]"/>{Feature2}</p>
        <p className="font-poppins text-[15px] leading-[22.5px] text-secondary flex items-center gap-2"><FaCheck className="text-blue text-[17.5px]"/>{Feature3}</p>
        <p className="font-poppins text-[15px] leading-[22.5px] text-secondary flex items-center gap-2"><FaCheck className="text-blue text-[17.5px]"/>{Feature4}</p>
        <p className="font-poppins text-[15px] leading-[22.5px] text-secondary flex items-center gap-2"><FaCheck className="text-blue text-[17.5px]"/>{Feature5}</p>
      </div>
      <div className="pl-7.5">
        <ButtonBlueWicon ButtonName={"Choose Plan"}/>
      </div>
    </div>
  )
}

export default PlanCard
