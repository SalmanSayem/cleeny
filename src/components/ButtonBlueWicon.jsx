import { FaArrowRightLong } from "react-icons/fa6";

const ButtonBlueWicon = ({ButtonName}) => {
  return (
    <div>
      <button className="flex gap-2 items-center text-[15px] font-poppins font-medium leading-[22.5px] text-white bg-blue py-4.25 px-8 rounded-[30px]">
        {ButtonName}
        <span>
          <FaArrowRightLong />
        </span>
      </button>
    </div>
  );
};

export default ButtonBlueWicon;
