import { IoIosArrowForward } from "react-icons/io";


const FooterCompany = () => {
  return (
    <div className="w-49">
      <h4 className="font-inter font-semibold text-[24px] leading-8 text-white pb-7.5">
        Company
      </h4>

      <ul className="flex flex-col gap-4">
        <li>
          <a className="flex items-center gap-2 font-inter text-[16px] leading-6 text-white" href="#"><IoIosArrowForward className="text-[#808CBF]"/>Home</a>
        </li>
        <li>
          <a className="flex items-center gap-2 font-inter text-[16px] leading-6 text-white" href="#"><IoIosArrowForward className="text-[#808CBF]"/>About Us</a>
        </li>
        <li>
          <a className="flex items-center gap-2 font-inter text-[16px] leading-6 text-white" href="#"><IoIosArrowForward className="text-[#808CBF]"/>Our Services</a>
        </li>
        <li>
          <a className="flex items-center gap-2 font-inter text-[16px] leading-6 text-white" href="#"><IoIosArrowForward className="text-[#808CBF]"/>Meet Our Team</a>
        </li>
        <li>
          <a className="flex items-center gap-2 font-inter text-[16px] leading-6 text-white" href="#"><IoIosArrowForward className="text-[#808CBF]"/>Latest Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterCompany;
