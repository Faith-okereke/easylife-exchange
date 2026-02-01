import { Icon } from "@iconify/react";
import Logo from "/easylife-logo.png";
import { useState } from "react";
const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "services", label: "Services" },
    { href: "rate-calculator", label: "Rate Calculator" },
    { href: "contact-us", label: "Contact Us" },
  ];
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="lg:px-20 lg:py-10">
      <div className="lg:flex hidden justify-between w-full p-2 bg-[#FBFCFB] rounded-xl">
        <img
          src={Logo}
          alt="Easy-Life Excahnge Logo"
          className="h-12 w-12 object-contain"
        />
        <div className="flex justify-center gap-8 items-center">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-black">
              {item.label}
            </a>
          ))}
        </div>
        <button className="btn-primary">Download app now</button>
      </div>

      {/* MOBILE NAVBAR  */}
      <div className="block lg:hidden p-6 relative bg-[#FBFCFB]">
       {openNav && <div
          className="fixed inset-0 bg-black/20 z-20"
          onClick={() => setOpenNav(false)}
        />}
        <Icon
          icon={"charm:menu-hamburger"}
          fontSize={40}
          onClick={() => setOpenNav(!openNav)}
        />
        {openNav && (
          <div className="flex flex-col justify-normal p-6 gap-5 bg-white z-30 w-[70%] rounded-xl h-screen absolute top-0 left-0">
            <img
              src={Logo}
              alt="Easy-Life Excahnge Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col justify-normal gap-8 items-start text-lg">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} className="text-black">
                  {item.label}
                </a>
              ))}
            </div>
            <button className="btn-primary w-fit rounded-md text-justify">
              Download app now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
