import { FaCheckCircle } from "react-icons/fa";


const AboutCheckList = ({text}) => {
  return (
    <>
    <p className="flex items-center gap-2 font-inter text-[16px] leading-6 text-primary"><FaCheckCircle className=" text-blue text-[18px]"/>{text}</p>
    </>
  )
}

export default AboutCheckList
