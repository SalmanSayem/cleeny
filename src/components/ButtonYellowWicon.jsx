import { FaArrowRightLong } from "react-icons/fa6";

const ButtonYellowWicon = ({ButtonName}) => {
  return (
    <button className="flex gap-2 items-center text-[15px] font-poppins font-medium leading-[22.5px] text-primary bg-yellow py-4.25 px-9 rounded-[30px]">
      {ButtonName}<span><FaArrowRightLong/></span>
    </button>
  );
};

export default ButtonYellowWicon;
