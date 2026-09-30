import { FaCircle } from "react-icons/fa";

const FooterBlog = () => {
  return (
    <div className="w-103.25">
      <h4 className="font-inter font-semibold text-[24px] leading-8 text-white pb-9">
        Latest Blog
      </h4>
      <div className="flex flex-col gap-8">
        <div className="flex gap-5 items-center">
            <img src="footer-thumb.png" alt="" />
            <div>
                <h6 className='font-inter text-[18px] leading-7 text-white pb-2'>10 Most Popular Clean Tips for Housey</h6>
                <p className="text-[14px] font-poppins leading-5 flex items-center gap-2 text-[#808CBF]"><FaCircle className="text-[8px]"/>Nov 16, 2024</p>
            </div>
        </div>
        <div className="flex gap-5 items-center">
            <img src="footer-thumb2.png" alt="" />
            <div>
                <h6 className='font-inter text-[18px] leading-7 text-white pb-2'>Floor cleeny and Washing New...</h6>
                <p className="text-[14px] font-poppins leading-5 flex items-center gap-2 text-[#808CBF]"><FaCircle className="text-[8px]"/>Nov 16, 2024</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBlog
