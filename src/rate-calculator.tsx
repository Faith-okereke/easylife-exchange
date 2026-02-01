import { Icon } from "@iconify/react";

const RateCalculator = () => {
  return (
    <div className="bg-primary-dark  lg:px-20 px-10 lg:pb-12 pb-6">
      <div className="text-white flex justify-between items-center w-full lg:py-8 py-6">
        <h5 className="font-semibold">Rate Calculator</h5>
        <p>
          Our rate: <span className="text-lg font-semibold">1,520.00=$1</span>
        </p>
      </div>
      <div className="flex lg:flex-row flex-col  justify-center items-center gap-5">
        <div className="bg-white rounded-lg p-5 w-full lg:h-52 h-76">
          <div className="flex justify-between items-center font-semibold">
            <p className="">Rate Calculator</p>
            <div className="flex justify-center items-center gap-1 border border-gray-500 rounded-lg p-2 cursor-pointer">
              <p>BTC</p>
              <Icon icon={"line-md:chevron-down"} />
            </div>
          </div>
          <p className="py-6">
            Enter the price amount of BTC you'd like to calculate
          </p>
          <div className="flex lg:flex-row flex-col justify-normal items-center gap-4">
            <input
              type="number"
              name="coin"
              id="coin"
              className="border border-gray-300 rounded-lg p-3 w-full outline-none "
            />
            <button className="bg-primary-dark rounded-lg py-3 px-10 text-white lg:w-auto w-full font-normal cursor-pointer">
              Calculate
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 w-full lg:h-52 h-76">
          <p className="font-semibold">Rate Calculation Result:</p>
        </div>
      </div>
    </div>
  );
};

export default RateCalculator;
