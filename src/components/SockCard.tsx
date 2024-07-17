import SockCardProps from "../interfaces/SockCardProps.interface";
import { useState } from "react";
import SockCardModal from "../modals/SockCardModal";

const SockCard: React.FC<SockCardProps> = ({ name, price, img }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="max-w-sm w-96 lg:w-64 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-contain"
          src={img}
          alt="Product Image"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-700 mt-2">N${price}</p>
          <button
            onClick={() => setOpen(true)}
            className="shadow-lg w-full bg-white text-yellow-400 border border-yellow-400 hover:bg-yellow-500 hover:text-white rounded-md px-3 mt-3 py-1 transition-all"
          >
            Order
          </button>
        </div>
      </div>

      <SockCardModal open={open} setOpen={setOpen} name={name} price={price} />
    </>
  );
};

export default SockCard;
