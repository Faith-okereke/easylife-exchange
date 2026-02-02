import avatar from "/person.png";
import Marquee from "react-fast-marquee";

const Testimonies = () => {
  return (
    <section className="lg:py-20 py-10 bg-white overflow-hidden ">
      <div className="max-w-360 mx-auto">
        <h2 className="font-bold text-2xl md:text-4xl text-center text-black mb-16">
          From the mouth of Our Users
        </h2>
        <Marquee autoFill={true} pauseOnHover={true}>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-4 gap-6 place-items-center px-4 ">
              {[...Array(9)].map((_, i) => (
                <TestimonyCard key={`top-${i}`} />
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};
export default Testimonies;

const TestimonyCard = () => {
  return (
    <div className="relative shrink-0 w-96 bg-[#EEFBCF] rounded-4xl overflow-hidden pt-10 pb-6 px-5 flex flex-col justify-center">
      {/* Top Right Blob */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#B5E460] rounded-full z-0 mix-blend-multiply opacity-80" />

      {/* Bottom Left Blob */}
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#B5E460] rounded-full z-0 mix-blend-multiply opacity-80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center">
        <p className="text-[#1A1A1A]  text-sm leading-[1.6] opacity-90">
          “This is literally the best app ever. Sending and receiving ,money has
          never been easier. It simply makes my life better and more productive!
          I’d totally recommend any day, any time.”
        </p>

        <div className=" flex items-center justify-end gap-3 w-full">
          <span className="font-bold text-black text-sm">~Shady</span>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm">
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
