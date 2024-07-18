import SockCard from "../components/SockCard";
import socks2 from "../assets/socks-2.png";

const socks = [
  {
    id: 1,
    name: "Socks 2",
    price: 20,
    image: socks2,
  },
  {
    id: 2,
    name: "Socks 2",
    price: 20,
    image: socks2,
  },
  {
    id: 3,
    name: "Socks 2",
    price: 20,
    image: socks2,
  },
  {
    id: 4,
    name: "Socks 2",
    price: 20,
    image: socks2,
  },
];

const Sport = () => {
  return (
    <section className="pt-10 bg-yellow-200">
      <h2 className="ms-5  md:ms-10 text-xl md:text-2xl  font-nunito">Sport</h2>
      <div className="md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-9 pt-8 pb-12">
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

export default Sport;
