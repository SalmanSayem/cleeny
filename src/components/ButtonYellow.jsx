import { FaArrowRightLong } from "react-icons/fa6";

const ButtonYellow = ({ButtonName}) => {
  return (
    <button className="flex gap-2 items-center text-[15px] font-poppins font-medium leading-[22.5px] text-primary bg-yellow py-3.75 px-7.5 rounded-[30px]">
      {ButtonName}
    </button>
  );
};

export default ButtonYellow;
