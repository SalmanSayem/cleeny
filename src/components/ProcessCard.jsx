const ProcessCard = ({workIcon,no,name,decription  }) => {
  return (
    <div className="flex flex-col gap-[35.5px] items-center px-12.75">
      <div className="relative flex items-center justify-center w-28 h-28 bg-white rounded-2xl shadow-[0px_30px_50px_0px_rgba(152,178,240,0.5)]">
        <div>
          <img src={workIcon} alt="work icon" />
        </div>
        <div className="w-6.5 h-6.5 rounded-[50%] bg-yellow flex items-center justify-center absolute -right-3.25 top-1/2 -translate-y-1/2">
          <p className="font-inter text-[14px] leading-5 text-primary">{no}</p>
        </div>
      </div>
      <div className="relative">
        <h3 className="font-inter font-semibold text-[24px] leading-8 text-primary">
          {name}
        </h3>
        <div className="w-7 h-0.5 bg-blue absolute bottom-[-5.5px] left-1/2 -translate-x-1/2">

        </div>
      </div>
      <div>
        <p className=" text-center font-poppins  text-[16px] leading-6 text-secondary">{decription}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
