import { FC } from "react";
import { PiXSquare } from "react-icons/pi";

interface CartItemProps {
  name: string;
  price: number;
  image: any;
  // quantity: number;
  // onIncrement: () => void;
  // onDecrement: () => void;
onRemove: () => void;
}

const CartItem: FC<CartItemProps> = ({ name, price, image, onRemove }) => {
  return (
    <div className="shadow-lg rounded-lg shadow-neutral-600 mt-6 px-14 md:px-7 lg:px-10 py-2 w-full">
      <div className="flex justify-end mb-3">
        <PiXSquare className="cursor-pointer" onClick={onRemove} size={25} />
      </div>
      <div className="flex flex-col items-center md:flex-row flex-wrap justify-between md:mt-4 w-full">
        <img
          src={image}
          alt="Selected"
          className="mb-4 object-contain max-h-20 w-20 rounded-md shadow-md"
        />
        <div className="flex flex-col gap-2 max-w-52">
          <p className="lg:text-lg md:text-md">
            Sock name: <span className="text-gray-600">{name}</span>
          </p>
          <p className="lg:text-lg md:text-md mb-3">
            Price: <span className="text-gray-600">N${price}</span>
          </p>
        </div>

        <div className="flex flex-wrap md:items-end flex-col gap-2 md:mt-1">
          <p className="lg:text-lg text-start md:text-md">
            Price: <span className="text-gray-600">N${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
