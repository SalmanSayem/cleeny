import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";


const FooterContact = () => {
  return (
    <div className="w-76.25">
      <h4 className="font-inter font-semibold text-[24px] leading-8 text-white pb-10">
        Latest Blog
      </h4>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5 ">
            <div className="w-11 h-11 bg-[#183088] rounded-[50%] border border-dashed border-[#43559F] flex items-center justify-center text-white text-[18px] pb-1.25 shrink-0">
                <IoLocationOutline/>
            </div>
            <div>
                <h6 className="font-inter font-medium text-[17px] leading-[25.5px] text-white">Address</h6>
                <p className="font-poppins text-[15px] leading-[22.5px] text-[#B9BBD2]">102/B Philosophy Market Road California, USA</p>
            </div>
        </div>
        <div className="flex gap-5 ">
            <div className="w-11 h-11 bg-[#183088] rounded-[50%] border border-dashed border-[#43559F] flex items-center justify-center text-white text-[18px] pb-1.25 shrink-0">
                <TbPhoneCall/>
            </div>
            <div>
                <h6 className="font-inter font-medium text-[17px] leading-[25.5px] text-white">Call Us</h6>
                <p className="font-poppins text-[15px] leading-[22.5px] text-[#B9BBD2]">+880 123 (4567) 890</p>
            </div>
        </div>
        <div className="flex gap-5 ">
            <div className="w-11 h-11 bg-[#183088] rounded-[50%] border border-dashed border-[#43559F] flex items-center justify-center text-white text-[18px] pb-1.25 shrink-0">
                <MdOutlineEmail/>
            </div>
            <div>
                <h6 className="font-inter font-medium text-[17px] leading-[25.5px] text-white">Email</h6>
                <p className="font-poppins text-[15px] leading-[22.5px] text-[#B9BBD2]">example@yahoo.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContact
