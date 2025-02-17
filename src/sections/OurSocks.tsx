import SockCard from "../components/SockCard";
// import socks1 from "../assets/socks-1.png";
// import socks2 from "../assets/socks-2.png";
// import socks3 from "../assets/socks-3.png";
// import socks4 from "../assets/socks-4.png";
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
//     name: "Socks 2",
//     price: 20,
//     image: socks2,
//   },
//   {
//     id: 3,
//     name: "Socks 3",
//     price: 30,
//     image: socks3,
//   },
//   {
//     id: 4,
//     name: "Socks 4",
//     price: 40,
//     image: socks4,
//   },
// ];

const OurSocks = () => {
  const [sockDatas, setSockDatas] = useState<any[]>([]);
  const [, setCatalogID] = useState<any>();

  const catalogName = "BestSelling";
  useEffect(() => {
    const fetchCatalogData = async () => {
      const { data, error } = await supabase
        .from("catalog")
        .select("id")
        .match({ catalog_name: catalogName });
      if (error) {
        return console.log("There was an error fetchign catalog data", error);
        // return console.log(error);
      }
      setCatalogID(data);
    };
    const fetchSockData = async () => {
      const { data, error } = await supabase
        .from("socks")
        .select("*")
        .match({ sock_catalog_id: "4" });

      setSockDatas(data || []);
      if (error) {
        console.log(error);
        return console.log(error);
      }
    };
    fetchCatalogData();
    fetchSockData();
  }, []);
  return (
    <>
      <section className="pt-5">
        <h2 className="ms-5 md:ms-10 text-2xl md:text-3xl font-bold font-nunito">
          Best Selling🔥{" "}
        </h2>
        <div className="bg-white md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-9 pt-8 pb-12">
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
    </>
  );
};

export default OurSocks;
