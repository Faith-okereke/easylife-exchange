import { Icon } from "@iconify/react";
import Logo from "/easylife-logo.webp";
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
        {openNav && (
          <div
            className="fixed inset-0 bg-black/40 z-20"
            onClick={() => setOpenNav(false)}
          />
        )}
        <div className="flex justify-between items-center w-full">
          <img
            src={Logo}
            alt="Easy-Life Excahnge Logo"
            className="h-12 w-12 object-contain"
           
          />
          <Icon
            icon={"charm:menu-hamburger"}
            fontSize={40}
            onClick={() => setOpenNav(!openNav)}
          />
        </div>

        {openNav && (
          <div className="flex flex-col justify-normal p-6 gap-10 bg-white z-30 w-[70%]  h-screen fixed top-0 right-0">
            <Icon
              icon={"ix:cancel"}
              className="absolute top-6 right-6"
              fontSize={30}
              onClick={() => setOpenNav(false)}
            />
            <div className="flex flex-col justify-normal gap-8 items-start text-lg pt-12">
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
