import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({image, day, month, heading, paragraph}) => {
  return (
    <div className="bg-[#F3F4F8] rounded-md overflow-hidden">
      <div className="relative">
        <img className="w-full" src={image} alt="blog thumbnail" />
        <div className="text-center py-2.5 px-5 bg-yellow rounded-sm absolute bottom-[21.5px] left-5">
          <h5 className="font-inter font-semibold text-[24px] leading-8 text-primary">
            {day}
          </h5>
          <h6 className="font-inter text-[14px] leading-5 text-primary">{month}</h6>
        </div>
      </div>
      <div className="p-7">
        <h4 className="font-inter text-[22px] leading-7 text-primary font-semibold">{heading}</h4>
        <p className="pt-3 pb-5 font-inter text-[16px] leading-6 text-secondary font-light">
          {paragraph}
        </p>
        <a className="font-inter text-[16px] flex items-center gap-2 leading-6 text-primary font-medium" href="#">
          Read More
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
