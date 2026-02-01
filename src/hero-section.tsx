import PhoneImage from "/iPhone15Pro.png";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center lg:items-end px-6 lg:px-20 pt-6 lg:pt-10 overflow-hidden  lg:pb-24 pb-12">
      <section className="flex flex-col gap-6 items-start justify-center w-full lg:w-1/2 z-10">
        <h1 className="text-3xl lg:text-5xl text-black font-bold leading-tight">
          Experience <span className="text-primary">Swift</span> and{" "}
          <span className="text-[#568013]">Seamless</span> Transactions with
          EasyLife Exchange
        </h1>
        <p className="text-black text-lg leading-relaxed max-w-lg">
          <strong>Easylife Exchange</strong> makes it seamless to buy and trade
          bitcoin and other cryptocurrencies from any location, at your
          convenience.
        </p>
        <button className="btn-primary mt-4 px-8 py-3 rounded-full">
          Download app now
        </button>
      </section>
      <div className="relative flex justify-center items-end w-full lg:w-1/2">
        
        {/* Green Ellipse - Made wider (140%) to accommodate larger phones */}
        <div className="absolute bottom-0 w-[120%] h-[45%] bg-primary rounded-[100%] translate-y-[20%]" />

        <img
          src={PhoneImage}
          alt="App Preview"
          className="relative z-10 w-full h-auto object-contain lg:scale-110 origin-bottom"
        />
      </div>
    </div>
  );
};

export default HeroSection;