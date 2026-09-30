
const HeroCard = ({icon, heading, description}) => {
  return (
    <div className=" rounded-sm py-8 px-9 bg-[#F3F4F8] flex gap-7 items-center">
      <div>
        <img src={icon} alt="Feature Icon" />
      </div>
      <div>
        <h6 className="font-inter font-semibold text-[22px] leading-8.25 text-primary">{heading}</h6>
        <p className="font-poppins text-[15px] leading-5.5 text-secondary">{description}</p>
      </div>
    </div>
  )
}

export default HeroCard
