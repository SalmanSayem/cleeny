import footerbg from "../assets/footer.bg.png";
import FooterBlog from "./FooterBlog";
import FooterCompany from "./FooterCompany";
import FooterContact from "./FooterContact";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  const styles = {
    background: `url(${footerbg}) no-repeat center / cover`,
  };
  return (
    <section style={styles}>
      <div className="container">
        <div className=" relative mb-30">
          <img className="w-full" src="div.gridFooter.png" alt="" />
          <div className=" flex items-center gap-6 absolute left-10 top-1/2 -translate-y-1/2">
            <div className="w-17.5 h-17.5 rounded-[50%] bg-white flex items-center justify-center">
              <img src="subscribe-icon.png" alt="phn icon" />
            </div>
            <div>
              <p className="font-poppins font-light text-[15px] leading-[22.5px] text-primary">
                Call Us Now
              </p>
              <h6 className="font-inter font-semibold text-[22px] leading-8.25 text-primary">
                +980 765 (546) 900
              </h6>
            </div>
          </div>
          <div className=" flex items-center gap-17.5 absolute right-10 top-1/2 -translate-y-1/2">
            <h4 className="font-inter font-semibold text-[28px] leading-10.5 text-white">
              Subscribe Now
            </h4>
            <div className="flex rounded-md overflow-hidden">
              <input className="w-68 bg-white" type="text" />
              <button className="bg-primary text-[16px] leading-6 font-inter font-medium text-white py-4 px-5.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between pb-24">
          <FooterInfo />
          <FooterCompany />
          <FooterBlog />
          <FooterContact />
        </div>
        <div className="py-6 border-t border-[#334899]">
            <p className="text-center font-poppins text-[16px] leading-6 text-white">© Copyrights 2024 Cleeny All rights reserved by <a className="text-yellow" href="#">Salman Mahmud</a></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
