import { IoMdCall } from "react-icons/io";

const CallAdCard = () => {
  const styles = {
    background: `url('div.grid.png') no-repeat center / cover`,
    padding: "60px 64px",
  };
  return (
    <div style={styles} className=" absolute left-0 -bottom-27.5 w-full">
      <div className=" relative flex items-center justify-between">
        <h2 className="font-inter font-bold text-[44px] leading-13.5 text-white max-w-140.5">
          Please Call Us to Take the Extraordinary Service!
        </h2>
        <button className="flex gap-2 items-center text-[15px] font-poppins font-medium leading-[22.5px] text-primary bg-yellow py-4.25 px-9 rounded-[30px]">
          <span>
            <IoMdCall />
          </span>
          Call : 123 (4567) 890
        </button>
        <img className=" absolute -bottom-15 left-1/2 -translate-x-1/2" src="address-thumb.png" alt="" />
      </div>
    </div>
  );
};

export default CallAdCard;
