import SockCardProps from "../interfaces/SockCardProps.interface";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

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
            className=" shadow-lg w-full bg-white text-yellow-400 border border-yellow-400 hover:bg-yellow-500 hover:text-white rounded-md px-3 mt-3 py-1 transition-all"
          >
            Order
          </button>
        </div>
      </div>

      {/*   Modal 1    */}
      <Dialog className="relative z-10" open={open} onClose={setOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-chakra">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-3 md:pt-5 sm:p-6 sm:pb-4">
                <div>
                  <div className="md:mt-3 md:text-center sm:mt-1 sm:text-left">
                    <DialogTitle
                      as="h2"
                      className="text-xl md:text-2xl font-semibold leading-6 mb-2 md:mb-0 text-gray-900"
                    >
                      Order your socks
                    </DialogTitle>
                    <section className="w-full">
                      <div className="flex flex-col md:flex-row justify-between md:mt-4 w-full">
                        <p className="text-lg md:text-md">
                          Sock name:{" "}
                          <span className="text-gray-600">Formal socks</span>
                        </p>
                        <p className="text-lg md:text-md">
                          Price: <span className="text-gray-600">N$30</span>
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between md:mt-4 w-full">
                        <input
                          id="quantity"
                          type="number"
                          autoComplete="quantity"
                          placeholder="Enter the quantity you want"
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600  sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className=" sm:mt-1 md:mt-2 w-full">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-500 shadow-sm ring-1 ring-inset ring-yellow-500 hover:bg-yellow-600 hover:text-white"
                          >
                            Order now
                          </button>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex justify-center px-4 md:pt-3 pb-3 sm:px-6">
                <button
                  type="button"
                  className="mt-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
    </>
  );
};

export default SockCard;
