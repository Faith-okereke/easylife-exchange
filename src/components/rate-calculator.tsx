import { useState } from "react";
import { Icon } from "@iconify/react";

const RateCalculator = () => {
  // 1. Data and State
  const COIN_DATA: Record<string, number> = {
    BTC: 95000000,
    ETH: 4500000,
    USDT: 1520,
  };

  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCalculate = () => {
    const num = parseFloat(amount);
    if (!isNaN(num)) {
      setResult(num * COIN_DATA[selectedCoin]);
    }
  };

  return (
    <div className="bg-primary-dark lg:px-20 px-10 lg:pb-12 pb-6" id="rate-calculator">
      <div className="text-white flex md:flex-row flex-col justify-between items-center w-full lg:py-8 py-6">
        <h5 className="font-semibold">Rate Calculator</h5>
        <p>
          Our rate: <span className="text-lg font-semibold">1,520 =$1</span>
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center gap-5">
        <div className="bg-white rounded-lg p-5 w-full lg:h-52 h-76">
          <div className="flex justify-between items-center font-semibold">
            <p className="">Rate Calculator</p>
            {/* Functional Dropdown */}
            <div className="relative">
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-center items-center gap-1 border border-gray-500 rounded-lg p-2 cursor-pointer"
              >
                <p>{selectedCoin}</p>
                <Icon icon={"line-md:chevron-down"} />
              </div>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {Object.keys(COIN_DATA).map((coin) => (
                    <div 
                      key={coin}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCoin(coin);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {coin}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <p className="py-6">
            Enter the price amount of {selectedCoin} you'd like to calculate
          </p>
          
          <div className="flex lg:flex-row flex-col justify-normal items-center gap-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full outline-none"
            />
            <button 
              onClick={handleCalculate}
              className="bg-primary-dark rounded-lg py-3 px-10 text-white lg:w-auto w-full font-normal cursor-pointer"
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 w-full lg:h-52 h-32">
          <p className="font-semibold text-gray-400">Rate Calculation Result:</p>
          {result !== null && (
             <p className="text-2xl font-bold pt-4">₦{result.toLocaleString()}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RateCalculator;