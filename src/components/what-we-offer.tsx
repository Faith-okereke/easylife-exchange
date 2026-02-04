import phoneHomeImg from "/home.webp";
import giftImage from "/Gifts image.png";

import CryptoRing from "/BigImagebg.webp";
import LargeBitcoin from "/Bitcoin.webp";

import Ethereum from "/icons/Ethereum.png";
import Solana from "/icons/Solana.png";
import BitcoinSmall from "/icons/Bitcoin-icon.png";
import Tether from "/icons/Tether.png";
import Binance from "/icons/Binance.png";

import airtime from "/icons/airtime.png";
import betfunding from "/icons/betfunding.png";
import cable from "/icons/cable.png";
import electricity from "/icons/electricity.png";

const WhatWeOffer = () => {
  return (
    <div className="bg-white lg:px-20 lg:py-24 p-6 py-10 " id="services">
      <h2 className="font-semibold text-3xl pb-8 text-center">What We Offer</h2>
      {/* CARDS  */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        
        {/* CARD 1 */}
        <div className="bg-linear-to-b from-primary-light to-[#DEEFC3] flex justify-between items-end rounded-2xl lg:min-h-80 min-h-50 relative overflow-hidden">
          <div className="flex flex-col gap-4 lg:p-8 p-6 max-w-68 relative z-10">
            <h3 className="font-bold lg:text-2xl text-xl">
              Buy and Sell Crypto
            </h3>
            <p className="text-sm">
              Buy and trade bitcoin and other cryptocurrencies from any
              location, at your convenience
            </p>
          </div>
          <CryptoRingImage />
        </div>

        {/* CARD 2 */}
        <div className="bg-[#C8ED8C] flex justify-between items-end rounded-2xl lg:min-h-80 min-h-50">
          <div className="flex flex-col gap-4 lg:py-8 lg:pl-8 lg:pr-10 p-6 max-w-68">
            <h3 className="font-bold lg:text-2xl text-xl">
              Send and Receive Money
            </h3>
            <p className="text-sm">
              Send and receive money easily from any location, at your
              convenience
            </p>
          </div>
          <img
            src={phoneHomeImg}
            alt=""
            className="lg:w-72 lg:h-72 h-32 w-32 object-contain"
          />
        </div>

        {/* CARD 3 */}
        <div className="bg-linear-to-b from-[#C8ED8C] to-[#D7E6C0] flex justify-between items-end rounded-2xl lg:min-h-80 min-h-50 relative overflow-hidden">
          <div className="flex flex-col gap-4 lg:py-8 lg:pl-8 lg:pr-0 p-6 max-w-68">
            <h3 className="font-bold lg:text-2xl text-xl">Refer and Earn</h3>
            <p className="text-sm ">
              Refer your friends and family and earn amazing rewards!
            </p>
          </div>
          <img 
            src={giftImage} 
            alt="" 
            className="lg:w-96 lg:h-96 h-32 w-32 object-contain static lg:absolute lg:-right-20  lg:-bottom-15 " 
          />
        </div>

        {/* CARD 4 - Fixed Layout */}
        <div className="bg-[#E6FAC7] flex justify-between items-end lg:pl-8 lg:py-8 lg:pr-0 p-6 rounded-2xl lg:min-h-80 min-h-50 relative overflow-hidden">
          <div className="flex flex-col gap-4 md:max-w-60 max-w-40 relative z-10">
            <h3 className="font-bold lg:text-2xl text-xl">Pay Bills Easily</h3>
            <p className="text-sm">
              Top up airtime and data, subscribe your cable, buy electricity,
              and fund your betting account
            </p>
          </div>
          {/* Floating Content is now self-contained on the right */}
          <FloatingContent />
        </div>

      </div>
    </div>
  );
};
export default WhatWeOffer;

export const CryptoRingImage = () => {
  return (
    <div className="relative">
      <img
        src={CryptoRing}
        alt="Crypto Ring"
        className="lg:w-200 w-80 h-auto "
      />
      <img
        src={LargeBitcoin}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-20 md:h-20 w-8 h-8"
      />
      <img
        src={Ethereum}
        className="absolute top-10 left-1/4 transform -translate-x-1/2 -translate-y-1/2 md:w-8 md:h-8 h-5 w-5 hidden md:block"
      />
      <img
        src={Binance}
        className="absolute top-10 left-3/4 transform -translate-x-1/2 -translate-y-1/2 md:w-8 md:h-8 h-5 w-5 hidden md:block"
      />
      <img
        src={BitcoinSmall}
        className="absolute top-1/2 -right-3 transform -translate-x-1/2 -translate-y-1/2 md:w-8 md:h-8 h-5 w-5 hidden md:block"
      />
      <img
        src={Tether}
        className="absolute -bottom-3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 md:w-8 md:h-8 h-5 w-5 hidden md:block"
      />
      <img
        src={Solana}
        className="absolute bottom-20 left-5 transform -translate-x-1/2 -translate-y-1/2 md:w-8 md:h-8 h-5 w-5 hidden md:block"
      />
    </div>
  );
};

export const FloatingContent = () => {
  return (

    <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:pr-1 pr-2 flex flex-col justify-end  items-end gap-3 lg:gap-4 scale-75 lg:scale-100 origin-right">
      
      {/* Item 1 */}
      <div className="bg-white rounded-lg p-2 pr-4 shadow-lg flex items-center justify-between lg:w-38 w-30 lg:mr-44 mr-14">
        <img src={betfunding} className="w-5 h-5 lg:w-8 lg:h-8" />
        <p className="text-xs lg:text-sm font-medium">Bet Funding</p>
      </div>

      {/* Item 2 - Shifted Left (-ml) for staggered look */}
      <div className="bg-white rounded-lg p-2 pr-4 shadow-lg flex items-center justify-between lg:w-38 w-32 mr-4">
        <img src={electricity} className="w-5 h-5 lg:w-8 lg:h-8" />
        <p className="text-xs lg:text-sm font-medium">Buy Electricity</p>
      </div>

      {/* Item 3 */}
      <div className="bg-white rounded-lg p-2 pr-4 shadow-lg flex items-center justify-between lg:w-45 w-38 lg:mr-32 mr-14 ">
        <img src={cable} className="w-5 h-5 lg:w-8 lg:h-8" />
        <p className="text-xs lg:text-sm font-medium">Cable Subscription</p>
      </div>

      {/* Item 4 - Shifted Left */}
      <div className="bg-white rounded-lg p-2 pr-4 shadow-lg flex items-center justify-between  lg:w-44 w-35 mr-4 ">
        <img src={airtime} className="w-5 h-5 lg:w-8 lg:h-8" />
        <p className="text-xs lg:text-sm font-medium">Buy Airtime/Data</p>
      </div>
      
    </div>
  );
};