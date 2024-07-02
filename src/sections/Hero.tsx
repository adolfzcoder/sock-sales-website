import casual from "../assets/casual.jpg";
import casual2 from "../assets/casual-2.jpg";
import casual3 from "../assets/casual-3.jpg";

const Hero = () => {
  return (
    <section className="py-5 md:py-10">
      <div>
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-nunito font-bold">
          The best <span className="text-yellow-400">oportunity</span> to{" "}
          <span className="text-yellow-400">better</span> your outfit!!!
        </h1>
      </div>

      <div className="mt-8 md:mt-14 flex justify-center gap-x-7">
        <div>
            <img src={casual} className="h-64 md:max-h-96 rounded-lg" alt="casual outfit" />
        </div>
        <div className="flex flex-col justify-between">
            <img src={casual2} className="h-28 md:h-44 rounded-lg" alt="casual outfit 2" />
            <img src={casual3} className="h-28 md:h-44 rounded-lg" alt="casual outfit 2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
