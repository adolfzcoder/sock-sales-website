import Navbar from "../components/Navbar";
import SockCard from "../components/SockCard";

const Dashboard = () => {
  return (
    <>
      <Navbar index={1} />

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

        <section className="bg-white md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-11 pt-8 pb-12">
            <SockCard />
            <SockCard />
            <SockCard />
            <SockCard />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
