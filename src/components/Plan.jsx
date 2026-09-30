import Heading from "./Heading";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <section className=" pt-56 pb-28">
      <div className="container">
        <div className="text-center pb-14">
          <Heading name={"PRICING PLAN"} heading={"Affordable Pricing Plan"} />
        </div>
        <div className="grid grid-cols-3 gap-14 ">
          <PlanCard price={"39"} PlanName={"Starter Plans"} Feature1={"15% OFF All Service"} Feature2={"Floor Wash & cleeny"} Feature3={"Maintaince Equipment"} Feature4={"Schedule Working"} Feature5={"24/7 Supports"}/>
          <PlanCard price={"59"} PlanName={"Standard Plans"} Feature1={"15% OFF All Service"} Feature2={"Floor Wash & cleeny"} Feature3={"Maintaince Equipment"} Feature4={"Schedule Working"} Feature5={"24/7 Supports"}/>
          <PlanCard price={"89"} PlanName={"Premium Plans"} Feature1={"15% OFF All Service"} Feature2={"Floor Wash & cleeny"} Feature3={"Maintaince Equipment"} Feature4={"Schedule Working"} Feature5={"24/7 Supports"}/>
        </div>
      </div>
    </section>
  );
};

export default Plan;
