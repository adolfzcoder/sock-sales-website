import { FC, useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import socks1 from "../assets/socks-1.png";
import socks2 from "../assets/socks-2.png";
import socks3 from "../assets/socks-3.png";
import socks4 from "../assets/socks-4.png";
import CartItem from "../components/CartItem";
import supabase from "../config/supabaseClient";

interface CartModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CartModal: FC<CartModalProps> = ({ open, setOpen }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Socks 1", price: 10, image: socks1, quantity: 1 },
    { id: 2, name: "Socks 2", price: 20, image: socks2, quantity: 1 },
    { id: 3, name: "Socks 3", price: 30, image: socks3, quantity: 1 },
    { id: 4, name: "Socks 4", price: 40, image: socks4, quantity: 1 },
  ]);

  const handleIncrement = (id: number) => {
    setItems((cartDatas) =>
      cartDatas.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const modalRef = useRef<HTMLDivElement>(null);

  const [, setUserEmail] = useState<string | null>(null);
  const [userID, setUserID] = useState();
  const [cartDatas, setCartDatas] = useState<any[]>([]);

  const [, setSockCartID] = useState<any[]>([]);
  useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [open]);

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserEmail(user?.email ?? ""); // Set to empty string if user or user.email is undefined
        // Check for admin role if user is logged in
        const { data, error } = await supabase
          .from("users")
          .select("user_id, full_name, phone_number, email")
          .eq("email", user.email);

        if (error) {
          console.error("Error fetching user admin status:", error);
          return;
        }

        // setIsAdmin(data[0]?.is_admin === 1);

        setUserID(data[0]?.user_id);
        // Check if is_admin is 1
      }
    };

    const fetchCartData = async () => {
      const { data, error } = await supabase
        .from("carts")
        .select("*, users(*), socks(*)")
        .eq("user_id", userID);
      console.log(userID);
      if (error) {
        return console.log("Error fetching cart data", error);
      }
      // console.log(data);
      setSockCartID(data[0]?.sock_id || []);
      setCartDatas(data || []);

      // console.log("Here is cart data", cartDatas);
    };

    // const fetchSockData = async () => {
    //   const {data, error} = await supabase.from("socks").select("*").eq("sock_id", )
    // }

    fetchCartData();
    fetchUserData();
  }, []);
  return (
    <>
      <Dialog
        className="relative font-poppins z-10"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center pb-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              ref={modalRef}
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-xl
              sm:w-xl"
            >
              <div className="bg-white px-4 pb-4 pt-3 md:pt-5 sm:p-6 sm:pb-4">
                <div>
                  <div className="sm:mt-1">
                    <DialogTitle
                      as="h2"
                      className="text- text-center md:text-2xl font-semibold leading-6 mb-2 md:mb-0 text-gray-900"
                    >
                      Cart
                    </DialogTitle>
                    <section className="w-full">
                      {cartDatas.map((cartData) => (
                        <CartItem
                          key={cartData.id}
                          name={cartData.socks.socks_name}
                          price={cartData.socks.sock_price}
                          image={cartData.socks.sock_image_url}
                          quantity={cartData.quantity}
                          onIncrement={() => handleIncrement(cartData.id)}
                          onDecrement={() => handleDecrement(cartData.id)}
                          onRemove={() => removeItem(cartData.id)}
                        />
                      ))}
                      <div className="mt-3 flex justify-between">
                        <p>Total Items: {totalItems}</p>
                        <p>Subtotal: N${subtotal}</p>
                      </div>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold border border-black text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                        >
                          Order now
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex px-4 md:pt-1 pb-3 sm:px-6">
                <button
                  type="button"
                  className="mb-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                  onClick={() => setOpen(false)}
                >
                  Close modal
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CartModal;
