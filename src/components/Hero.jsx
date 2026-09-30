import bannerImagebg from "../assets/section.bg-cover.png";
import bannerImage from "../assets/BannerImage.png";
import ButtonYellowWicon from "./ButtonYellowWicon";
import HeroCard from "./HeroCard";

import featureIcon1 from "../assets/featureicon.png"
import featureIcon2 from "../assets/feature-icon2.png"
import featureIcon3 from "../assets/feature-icon3.png"

const Hero = () => {
  const styles = {
    background: `url(${bannerImagebg}) no-repeat center / cover`,
    paddingTop: "48px",
    paddingBottom: "80px",
  };
  return (
    <section style={styles}>
      <div className="container relative">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[18px] font-inter text-yellow font-medium leading-7">
              BEST CLEENY AGENCY
            </h4>
            <h1 className="text-[65px] font-inter text-white font-extrabold leading-18 pt-6">
              NEED CLEENY? CALL<span className="text-yellow">US TODAY</span>
            </h1>
            <p className=" max-w-133.25 text-[16px] font-poppins text-white leading-6 pt-6 pb-9">
              Need Clean of your home or office? Just Feel Free to Contact us.
              We try to Help you as soon as possible.
            </p>
            <ButtonYellowWicon ButtonName={"Get Started Now"} />
          </div>
          <div>
            <img className="min-w-184" src={bannerImage} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7 absolute w-full left-0 -bottom-45">
          <HeroCard icon={featureIcon1} heading={"House cleeny"} description={"Competently repurpose clean conveniently target"}/>
          <HeroCard icon={featureIcon2} heading={"Windwo cleeny"} description={"Competently repurpose clean conveniently target"}/>
          <HeroCard icon={featureIcon3} heading={"instrument"} description={"Competently repurpose clean conveniently target"}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
