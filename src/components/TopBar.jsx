import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <section className="bg-[#2F6EFF] text-white font-poppins">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="text-[15px] flex gap-10 items-center">
            <a className="flex items-center gap-1 leading-[22.5px]" href="#">
              <span className="text-[17px]">
                <IoLocationOutline />
              </span>
              102/B New Market, Sandigo-USA
            </a>
            <a className="flex items-center gap-1 leading-[22.5px]" href="#">
              <span className="text-[18px]">
                <IoMailOpenOutline />
              </span>
              example@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="social text-[14px] flex items-center">
              <a className="py-4.5 px-[10.5px] bg-[#1773EA]" href="#">
                <FaFacebookF />
              </a>
              <a className="py-4.5 px-[10.5px] bg-[#2CA5DA]" href="#">
                <FaXTwitter />
              </a>
              <a className="py-4.5 px-[10.5px] bg-[#0073B1]" href="#">
                <FaLinkedinIn />
              </a>
              <a className="py-4.5 px-[10.5px] bg-[#E11A21]" href="#">
                <FaPinterestP />
              </a>
            </div>
            <div className="phone flex items-center gap-2">
              <span className="text-[14px]">
                <FaPhoneSquareAlt />
              </span>
              <p className="font-poppins text-[14px] leading-5 font-light">Call :</p>
              <a className="font-poppins text-[14px] leading-5 font-medium" href="#">+980 234 4567</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
