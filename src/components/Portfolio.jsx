import ButtonYellowWicon from "./ButtonYellowWicon"
import Heading from "./Heading"
import PortfolioCard from "./PortfolioCard"
import portfolioImage from "../assets/portfolio-img.png"
import portfolioImage2 from "../assets/portfolio-img2.png"
import portfolioImage3 from "../assets/portfolio-img3.png"
import CallAdCard from "./CallAdCard"

const Portfolio = () => {
  return (
    <section className="bg-[#F3F3F7] pt-28">
        <div className="container">
          <div className="flex items-center justify-between pb-15">
            <div className="w-121">
              <Heading name={"CLEENY PORTFOLIO"} heading={"Latest cleeny Portfolio from Work Galary"}/>
            </div>
            <div>
              <ButtonYellowWicon ButtonName={"Veiw All Work"}/>
            </div>
          </div>
        </div>
        <div className="pb-58">
          <div className="grid grid-cols-3 gap-7.5 pb-16.5">
            <PortfolioCard image={portfolioImage} location={"Sandigo, USA"} name={"House Floor Cleaning"}/>
            <PortfolioCard image={portfolioImage2} location={"Sandigo, USA"} name={"House Floor Cleaning"}/>
            <PortfolioCard image={portfolioImage3} location={"Sandigo, USA"} name={"House Floor Cleaning"}/>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-2 bg-[#CCD9F9] rounded-[5px]"></div>
            <div className="w-10 h-2 bg-blue rounded-[5px]"></div>
            <div className="w-10 h-2 bg-[#CCD9F9] rounded-[5px]"></div>
            <div className="w-10 h-2 bg-[#CCD9F9] rounded-[5px]"></div>
          </div>
        </div>
        <div className="container relative">
          <CallAdCard/>
        </div>
    </section>
  )
}

export default Portfolio
