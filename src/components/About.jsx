import AboutCheckList from "./AboutCheckList";
import ButtonBlueWicon from "./ButtonBlueWicon";
import Heading from "./Heading";
import { BsTrophy } from "react-icons/bs";


const About = () => {
  return (
    <section className="pt-55 pb-30">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-24">
          <div className="">
            <img className="w-full" src="about-thumb.png" alt="" />
          </div>
          <div>
            <Heading
              name={"ABOUT US"}
              heading={"Making Your House Clean For Looks As a New"}
              description={
                "Competently repurpose go forward benefits without goal-oriented ROI conveniently target e-business opportunities whereas parallel task multimedia based web services"
              }
            />
            <div className="pt-7">
              <div className="flex items-center justify-between">
                <div>
                  <div className="bullet flex flex-col gap-3.5">
                    <AboutCheckList text={"Cleeny Your Home or Office"} />
                    <AboutCheckList text={"24/7 Emmergency Quality Services"} />
                    <AboutCheckList text={"Online Booking System available"} />
                  </div>
                  <div className="pt-9">
                    <ButtonBlueWicon ButtonName={"More About Us"} />
                  </div>
                </div>
                <div className="text-center bg-yellow rounded-lg py-8.75 px-7.25">
                  <BsTrophy className="text-blue text-[44px] m-auto" />
                  <h5 className="font-inter font-bold text-[36px] leading-13.5 text-primary">12+</h5>
                  <p className="font-poppins font-light text-[16px] leading-6 text-secondary">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
