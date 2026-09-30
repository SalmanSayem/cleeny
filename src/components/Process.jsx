import Heading from "./Heading";
import ProcessCard from "./ProcessCard";
import workIcon from "../assets/work-icon.png"
import workIcon2 from "../assets/work-icon2.png"
import workIcon3 from "../assets/work-icon3.png"

const Process = () => {
  return (
    <section className="py-25 relative overflow-hidden">
      <div className="container">
        <div>
          <img
            className=" absolute left-0 top-35"
            src="work-shape3.png"
            alt="shape"
          />
          <img
            className=" absolute right-23.75 -top-15.5"
            src="work-shape4.png"
            alt="shape"
          />
        </div>
        <div className="text-center w-139.25 m-auto pb-15 ">
          <Heading
            name={"WORKING PROCESS"}
            heading={"Easy Steps to Works"}
            description={
              "Competently repurpose go forward benefits without goal-oriented ROI conveniently target e-business opportunities whereas"
            }
          />
        </div>
        <div className="grid grid-cols-3 gap-7">
          <ProcessCard workIcon={workIcon} no={"1"} name={"Find Us Online"} decription={"Repurpose go forward benefits more conveniently e-business"}/>
          <ProcessCard workIcon={workIcon2} no={"2"} name={"Choose Services"} decription={"Repurpose go forward benefits more conveniently e-business"}/>
          <ProcessCard workIcon={workIcon3} no={"3"} name={"Book Appoinment"} decription={"Repurpose go forward benefits more conveniently e-business"}/>
        </div>
      </div>
    </section>
  );
};

export default Process;
