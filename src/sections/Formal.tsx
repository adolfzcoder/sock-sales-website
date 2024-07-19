import SockCard from "../components/SockCard";
// import socks1 from "../assets/socks-1.png";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

// const socks = [
//   {
//     id: 1,
//     name: "Socks 1",
//     price: 10,
//     image: socks1,
//   },
//   {
//     id: 2,
//     name: "Socks 1",
//     price: 10,
//     image: socks1,
//   },
//   {
//     id: 3,
//     name: "Socks 1",
//     price: 10,
//     image: socks1,
//   },
//   {
//     id: 4,
//     name: "Socks 1",
//     price: 10,
//     image: socks1,
//   },
// ];

const Formal = () => {
  const [sockDatas, setSockDatas] = useState<any[]>([]);

  useEffect(() => {
    const fetchSockData = async () => {
      const { data, error } = await supabase
        .from("socks")
        .select("*")
        .match({ sock_catalog_id: "2" });

      setSockDatas(data || []);
      if (error) {
        console.log(error);
        return alert(error);
      }
    };

    fetchSockData();
  }, []);
  return (
    <section>
      <h2 className="ms-5 mt-4 md:ms-10 text-xl md:text-2xl  font-nunito">
        Formal
      </h2>
      <div className=" md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-9 pt-8 pb-12 ">
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

export default Formal;
