import servicebg from "../assets/service-bg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import serviceImage from "../assets/service-img.png"
import serviceImage2 from "../assets/service-img2.png"
import serviceImage3 from "../assets/service-img3.png"
import serviceIcon from "../assets/service-icon.png"
import serviceIcon2 from "../assets/service-icon2.png"
import serviceIcon3 from "../assets/service-icon3.png"

const Service = () => {
  const styles = {
    background: `url(${servicebg}) no-repeat center / cover`,
    padding: "100px 0",
  };
  return (
    <section style={styles} className="">
      <div className="container">
        <div>
          <h1 className=" pb-14 font-inter font-bold text-[44px] leading-13.5 text-white text-center">
            Get A Free Appoinment
          </h1>

          <div className="grid grid-cols-4 gap-7">
            <input className=" rounded-sm w-full h-15 bg-white" type="text" />
            <input className=" rounded-sm w-full h-15 bg-white" type="text" />
            <input className=" rounded-sm w-full h-15 bg-white" type="text" />
            <button className="w-full rounded-sm flex items-center gap-2 justify-center text-[16px] leading-6 text-secondary py-3 bg-yellow">
              Book Appionment
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="pt-28 pb-15">
          <h4 className="text-center font-inter font-medium text-[16px] leading-6 text-yellow">
            OUR SERVICES
          </h4>
          <h2 className="text-center pt-3 font-inter font-bold text-[44px] leading-13.5 text-white">
            Professional cleeny Services
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-7.5">
            <ServiceCard serviceImage={serviceImage} serviceIcon={serviceIcon} name={"Office Floor Cleaning"} feature1={"House Floor Cleaning"} feature2={"Roof Clean & Wash"}/>
            <ServiceCard serviceImage={serviceImage2} serviceIcon={serviceIcon2} name={"House Wash & Clean"} feature1={"House Floor Cleaning"} feature2={"Roof Clean & Wash"}/>
            <ServiceCard serviceImage={serviceImage3} serviceIcon={serviceIcon3} name={"House Kitchen Cleaning"} feature1={"House Floor Cleaning"} feature2={"Roof Clean & Wash"}/>
        </div>
        <div className="flex items-center justify-center gap-2">
            <div className="h-2.5 w-2.5 rounded-[50%] bg-yellow"></div>
            <div className="h-2.5 w-2.5 rounded-[50%] bg-[#316FFF]"></div>
            <div className="h-2.5 w-2.5 rounded-[50%] bg-[#316FFF]"></div>
            <div className="h-2.5 w-2.5 rounded-[50%] bg-[#316FFF]"></div>
        </div>
      </div>
    </section>
  );
};

export default Service;
