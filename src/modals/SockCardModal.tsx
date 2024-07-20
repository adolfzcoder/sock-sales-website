import { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import EditSockModal from "./EditSockModal";
import supabase from "../config/supabaseClient";

interface SockCardModalProps {
  id: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  price: number;
  image: string;
}

const SockCardModal: FC<SockCardModalProps> = ({
  id,
  open,
  setOpen,
  name,
  price,
  image,
}) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false); // Flag to control button visibility
  const [, setCatalogDatas] = useState<any[]>([]);

  const [, setSockDatas] = useState<any[]>([]);
  const [catalogue, setCatalogue] = useState();
  const [description, setDescription] = useState();

  const [userID, setUserID] = useState();

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
          .select("is_admin, user_id")
          .eq("email", user.email);

        if (error) {
          console.error("Error fetching user admin status:", error);
          return;
        }

        setIsAdmin(data[0]?.is_admin === 1);

        setUserID(data[0]?.user_id);
        // Check if is_admin is 1
      }
    };
    const fetchCatalogData = async () => {
      const { data, error } = await supabase.from("catalog").select();

      if (error) {
        console.log("There was error getting the catalog data", error);
        console.log(error);
      }
      setCatalogDatas(data || []);
    };

    const fetchSockData = async () => {
      const { data, error } = await supabase
        .from("socks")
        .select("*, catalog(*)")
        .eq("id", id);

      if (error) {
        return console.log(error);
        // return console.log(error);
      }
      setCatalogue(data[0].catalog.catalog_name);
      setDescription(data[0].description);
      setSockDatas(data);
    };

    // const fetchUserData = async () => {
    //   const {
    //     data: { user },
    //   } = await supabase.auth.getUser();

    //   setUserEmail(user?[0].email);
    // };

    // const fetchUserTable = async () => {
    //   const { data, error } = await supabase
    //     .from("users")
    //     .select("email")
    //     .eq("email", userEmail);

    //   if (error) {
    //     return console.log("Error getting users Emails", error);
    //   }
    // };
    fetchSockData();

    fetchCatalogData();
    fetchUserData();
  }, []);

  const handleAddToCart = async () => {
    if (!userID) {
      // Handle case where user is not logged in
      console.warn("User is not logged in. Please sign in to add to cart.");
      return;
    }

    const { data, error } = await supabase.from("carts").insert({
      user_id: userID, // Use the fetched user ID
      sock_id: id, // Use the provided sock ID
      // Add other cart item details if needed (e.g., quantity)
    });

    if (error) {
      console.error("Error adding item to cart:", error);
      // Handle add-to-cart error (e.g., display an error message)
    } else {
      console.log("Item added to cart successfully:", data);
      // Handle successful add-to-cart (e.g., display a success message or update UI)
    }
  };
  return (
    <>
      <Dialog
        // className="relative font-poppins z-10"
        open={open}
        onClose={setOpen}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-3 md:pt-5 sm:p-6 sm:pb-4">
                <div>
                  <div className="sm:mt-1 ">
                    <DialogTitle
                      as="h2"
                      className="text- text-center  md:text-2xl font-semibold leading-6 mb-2 md:mb-0 text-gray-900"
                    >
                      Sock information
                    </DialogTitle>
                    <section className="w-full">
                      <div className="flex justify-center md:mt-4 w-full">
                        <img
                          src={image}
                          alt="Selected"
                          className="mb-4 object-contain max-h-24 rounded-md shadow-md"
                        />
                      </div>

                      <div className="flex flex-col md:flex-row justify-between w-full">
                        <p className="lg:text-lg md:text-md">
                          Sock name:{" "}
                          <span className="text-gray-600">{name}</span>
                        </p>
                        <p className="lg:text-lg md:text-md">
                          Price:{" "}
                          <span className="text-gray-600">N${price}</span>
                        </p>
                      </div>

                      <div className="flex items-start flex-col md:mt-1 w-full">
                        <p className="lg:text-lg md:text-md">
                          Catalogue:{" "}
                          <span className="text-gray-600">{catalogue}</span>
                        </p>
                        <p className="lg:text-lg text-start md:text-md">
                          Description:{" "}
                          <span className="text-gray-600">{description}</span>
                        </p>
                      </div>

                      <div className=" mt-2 md:mt-4 w-full">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-500 shadow-sm hover:bg-yellow-600 hover:text-white"
                            onClick={handleAddToCart}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>

                      {/*  */}
                      <div className="mt-3">
                        {userEmail && isAdmin && (
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold border border-black text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                            onClick={() => setOpenEdit(true)}
                            data-autofocus
                          >
                            Edit sock
                          </button>
                        )}
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
                  data-autofocus
                >
                  Close modal
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <EditSockModal
        open={openEdit}
        setOpen={setOpenEdit}
        name={name}
        price={price}
        image={image}
      />
    </>
  );
};

export default SockCardModal;
