import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import ButtonYellow from "./ButtonYellow";

const Navbar = () => {
  return (
    <nav className="py-5.5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <img src="logo.png" alt="" />
            </a>
          </div>
          <div className="flex gap-8.5 items-center">
            <ul className="flex items-center">
              <li>
                <a href="#">
                  Home<span><IoIosArrowDown /></span>
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service<span><IoIosArrowDown /></span></a>
              </li>
              <li>
                <a href="#">Pages<span><IoIosArrowDown /></span></a>
              </li>
              <li>
                <a href="#">Blog<span><IoIosArrowDown /></span></a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <div className="flex items-center gap-7.5">
                <button className="text-[16px] text-primary"><FaSearch/></button>
                <ButtonYellow ButtonName={"Get Free Quote"} ButtonIcon={"<FaArrowRightLong />"}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
