import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


const FooterInfo = () => {
  return (
    <div className="w-76.25">
      <img src="footer-logo.png" alt="white logo" />
      <p className='font-poppins text-[16px] leading-6 text-white pt-7 pb-9'>Competently repurpose forward conveniently target e-business multipurpose clean</p>
      <div className="flex gap-3 items-center">
        <a href="#"  className='w-10 h-10 rounded-[50%] text-white flex items-center justify-center border-2 border-[#334899]'>
            <FaFacebookF/>
        </a>
        <a href="#"  className='w-10 h-10 rounded-[50%] text-white flex items-center justify-center border-2 border-[#334899]'>
            <FaXTwitter/>
        </a>
        <a href="#"  className='w-10 h-10 rounded-[50%] text-white flex items-center justify-center border-2 border-[#334899]'>
            <FaLinkedinIn/>
        </a>
        <a href="#"  className='w-10 h-10 rounded-[50%] text-white flex items-center justify-center border-2 border-[#334899]'>
            <FaPinterestP/>
        </a>
      </div>
    </div>
  )
}

export default FooterInfo
