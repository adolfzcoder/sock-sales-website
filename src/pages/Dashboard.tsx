import Navbar from "../components/Navbar";
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
        image: socks1
    },
    {
        id: 2,
        name: "Socks 2",
        price: 20,
        image: socks2
    },
    {
        id: 3,
        name: "Socks 3",
        price: 30,
        image: socks3
    },
    {
        id: 4,
        name: "Socks 4",
        price: 40,
        image: socks4
    }
]

const Dashboard = () => {
  return (
    <>
      <main className="font-poppins">
        <section className="bg-white shadow">
          <div className="mx-auto md:flex md:justify-between max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl mb-3 md:mb-0 font-bold tracking-tight text-black">
              Dashboard
            </h1>
            <div
              className={`flex items-center space-x-1`}
            >
              <input
                type="text"
                placeholder="Search for a sock..."
                className="border rounded-md p-2 w-full md:w-64"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-all">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-9 pt-8 pb-12">
            {socks.map((item) => (
                <SockCard key={item.id} img={item.image} name={item.name} price={item.price} />
            ))}
            
        </section>
      </main>
    </>
  );
};

export default Dashboard;
