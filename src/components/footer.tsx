import { Icon } from "@iconify/react";
import LogoLight from "/easylife-logo-light.png";
import downloadGoogle from "/download-google.webp";
import downloadApple from "/download-apple.webp";
const Footer = () => {
  return (
    <div className="bg-primary-dark lg:px-20 px-6 lg:py-12 py-6 text-white">
      <div className="flex justify-normal items-center gap-8 pb-8">
        <img
          src={LogoLight}
          alt="EasyLife Exchange Logo"
          className="w-16 h-16 object-contain"
        />
        <p className=" font-medium">EasyLife Exchange</p>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between lg:items-end">
        <div className="flex flex-col gap-4">
          <p className="lg:text-sm text-base">
            Follow us on all our socials for daily updates
          </p>
          <div className="flex items-center gap-4 justify-normal">
            <Icon icon={"devicon:linkedin"} fontSize={40} />
            <Icon
              icon={"streamline-logos:x-twitter-logo-block"}
              color="#000000"
              fontSize={40}
            />
            <Icon icon={"skill-icons:instagram"} fontSize={40} />
            <Icon icon={"devicon:facebook"} fontSize={40} />
          </div>
        </div>
        {/* SECOND DIV  */}
        <div className="flex justify-normal items-start flex-col gap-3">
          <p className="lg:text-sm text-base">Get the app:</p>

          <div className="flex items-center gap-3">
            <img src={downloadGoogle} alt="Google CTA" className="w-36 rounded-2xl" />
            <img src={downloadApple} alt="Apple CTA" className="w-36 rounded-2xl" />
          </div>
        </div>
        {/* THIRD DIV (COPYRIGHT) */}
        <div className="flex flex-col gap-2 items-center justify-center text-xs pt-8 lg:pt-0">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p className="font-bold">EasyLife Exchange</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
