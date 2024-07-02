import SockCard from "../components/SockCard";
import socks1 from "../assets/socks-1.png";
import socks2 from "../assets/socks-2.png";
import socks3 from "../assets/socks-3.png";
import socks4 from "../assets/socks-4.png";

const socks = [
  {
    id: 1,
    name: "Socks 1",
    price: 10,
    image: socks1,
  },
  {
    id: 2,
    name: "Socks 2",
    price: 20,
    image: socks2,
  },
  {
    id: 3,
    name: "Socks 3",
    price: 30,
    image: socks3,
  },
  {
    id: 4,
    name: "Socks 4",
    price: 40,
    image: socks4,
  },
];

const OurSocks = () => {
  return (
    <section>
        <h2 className="ms-5 md:ms-10 text-2xl md:text-3xl font-bold font-nunito">Our Socks</h2>
      <div className="bg-white md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-9 pt-8 pb-12">
        {socks.map((item) => (
          <SockCard
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default OurSocks;
