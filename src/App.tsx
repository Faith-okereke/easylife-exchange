import Footer from "./footer";
import HeroSection from "./hero-section";
import Navbar from "./navbar";
import RateCalculator from "./rate-calculator";
import Testimonies from "./testimonies";
import  WhatWeOffer  from "./what-we-offer";
import singlePhone from "/iPhone 15.png";
import bigIphoneImage from "/IphoneSomething.png";

function App() {
  return (
    <div className="f min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <RateCalculator />
      {/* CRYPRO RATES / */}
      <div className="bg-white py-6 flex flex-col gap-8">
        <h4 className="font-semibold text-center text-xl">Crypto Rates</h4>
        <div className=" flex lg:flex-row flex-col justify-center items-center gap-6 px-6 lg:px-auto">
          <div className="bg-gray rounded-2xl p-3 flex items-center gap-4 md:min-w-sm w-full h-24 justify-center">
            <p className="">Buy Rate: </p>
            <p className="text-lg font-medium">1,520.00=$1</p>
          </div>
          <div className="bg-gray rounded-2xl p-3 flex items-center gap-4 md:min-w-sm w-full h-24 justify-center">
            <p className="">Sell Rate: </p>
            <p className="text-lg font-medium">1,520.00=$1</p>
          </div>
        </div>
      </div>

      {/* ABOUT EASYLIFE EXCHANGE / */}
      <div className="bg-primary-light flex lg:flex-row flex-col justify-center items-center gap-6  lg:py-16 py-8 px-6 lg:px-0">
        <img
          src={singlePhone}
          alt="Iphone 15"
          className="lg:w-125 lg:h-125 h-72 w-72 object-cover"
        />
        <div className="flex flex-col items-start gap-4 lg:w-md lg:py-32 order-1 lg:order-2">
          <h3 className="text-2xl font-semibold">About EasyLife Exchange</h3>
          <p className="font-manrope">
            Easylife makes it seamless to buy and trade bitcoin and other
            cryptocurrencies, pay bills, send and receive money, and trade
            giftcards from any location, at your convenience.
          </p>
          <button className="btn-primary mt-6 px-6">Download app now</button>
        </div>
      </div>
      <WhatWeOffer />
      <Testimonies />

      {/* CONTACT US SECTION  */}
      <div className=" lg:pt-32 pt-0 text-center lg:px-20 px-6 flex justify-center items-center flex-col">
        <h3 className="md:text-3xl text-xl font-semibold">Contact Us</h3>
        <p className="py-5">Feel free to reach out to us</p>
        <textarea
          name="contact"
          id="contact"
          placeholder="Enter message or enquiry"
          className="resize-none rounded-lg border border-gray-400 w-full h-32 outline-none  p-6 pl-8"
        ></textarea>
        <button className="btn-primary px-10 lg:mt-12 mt-8 font-medium">
          Send message
        </button>
      </div>
      {/* BIG PHONE IMAGE  */}
      <div className="flex justify-center items-center ">
        <img src={bigIphoneImage} className="" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
