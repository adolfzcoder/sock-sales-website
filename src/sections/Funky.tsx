import SockCard from "../components/SockCard";
// import socks3 from "../assets/socks-3.png";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

// const socks = [
//   {
//     id: 1,
//     name: "Socks 3",
//     price: 30,
//     image: socks3,
//   },
//   {
//     id: 2,
//     name: "Socks 3",
//     price: 30,
//     image: socks3,
//   },
//   {
//     id: 3,
//     name: "Socks 3",
//     price: 30,
//     image: socks3,
//   },
//   {
//     id: 4,
//     name: "Socks 3",
//     price: 30,
//     image: socks3,
//   },
// ];

const Funky = () => {
  const [sockDatas, setSockDatas] = useState<any[]>([]);

  useEffect(() => {
    const fetchSockData = async () => {
      const { data, error } = await supabase
        .from("socks")
        .select("*")
        .match({ sock_catalog_id: "5" });

      setSockDatas(data || []);
      if (error) {
        return console.log("There was an error fetchign sock data", error);
        // return console.log(error);
      }
    };

    fetchSockData();
  }, []);
  return (
    <section className="pb-5 bg-yellow-200">
      <h2 className="ms-5 md:ms-10 text-xl md:text-2xl  font-nunito">Funky</h2>
      <div className="md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-9 pt-8 pb-12">
        {sockDatas.map((item) => (
          <SockCard
            key={item.id}
            id={item.id}
            img={item.sock_image_url}
            name={item.sock_name}
            price={item.sock_price}
          />
        ))}
      </div>
    </section>
  );
};

export default Funky;
