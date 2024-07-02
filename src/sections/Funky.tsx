import SockCard from "../components/SockCard";
import socks3 from "../assets/socks-3.png";

const socks = [
  {
    id: 1,
    name: "Socks 3",
    price: 30,
    image: socks3,
  },
  {
    id: 2,
    name: "Socks 3",
    price: 30,
    image: socks3,
  },
  {
    id: 3,
    name: "Socks 3",
    price: 30,
    image: socks3,
  },
  {
    id: 4,
    name: "Socks 3",
    price: 30,
    image: socks3,
  },
];

const Funky = () => {
  return (
    <section className="mb-10">
      <h2 className="ms-5 md:ms-10 text-xl md:text-2xl  font-nunito">Funky</h2>
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

export default Funky;
