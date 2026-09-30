import bg from "../assets/testimonial-bg.png";
import TestimonialCard from "./TestimonialCard";
import testiThumb from "../assets/testi-thumb.png"
import testiThumb2 from "../assets/testi-thumb-2.png"

const Testimonials = () => {
  const styles = {
    background: `url(${bg}) no-repeat center / cover`,
    padding: "112px 0",
  };
  return (
    <section style={styles}>
      <div className="container">
        <div className="text-center pb-13">
          <h4 className=" font-inter font-medium text-[16px] leading-6 text-yellow">
            TESTIMONIALS
          </h4>
          <h2 className=" pt-3 font-inter font-bold text-[44px] leading-13.5 text-white">
            Our Customer’s Feedback
          </h2>
        </div>

        <div >
          <div className="grid grid-cols-2 gap-7.5 pb-16">
            <TestimonialCard image={testiThumb} name={"Anjelina Watson"} degignation={"UI/UX Designer"} reviweTitle={"Service Quality"} reviwe={"“Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective”"}/>
            <TestimonialCard image={testiThumb2} name={"Jhon D. Alexon"} degignation={"Web Developer"} reviweTitle={"Service Quality"} reviwe={"“Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective”"}/>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="h-2.5 w-2.5 rounded-[50%] bg-[#316FFF]"></button>
            <button className="h-2.5 w-2.5 rounded-[50%] bg-yellow"></button>
            <button className="h-2.5 w-2.5 rounded-[50%] bg-[#316FFF]"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
