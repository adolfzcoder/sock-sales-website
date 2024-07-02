import SockCard from "../components/SockCard";
import socks4 from "../assets/socks-4.png";

const socks = [
  {
    id: 1,
    name: "Socks 4",
    price: 40,
    image: socks4,
  },
  {
    id: 2,
    name: "Socks 4",
    price: 40,
    image: socks4,
  },
  {
    id: 3,
    name: "Socks 4",
    price: 40,
    image: socks4,
  },
  {
    id: 4,
    name: "Socks 4",
    price: 40,
    image: socks4,
  },
];

const Casual = () => {
  return (
    <section className="mb-10">
      <h2 className="ms-5 md:ms-10 text-xl md:text-2xl  font-nunito">Casual</h2>
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
  )
}

export default Casual;
