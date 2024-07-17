import { FC, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import EditSockModal from "./EditSockModal";

interface SockCardModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  price: number;
  image: string;
}

const catalogue = "Funky";
const description =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, magni aliquam! Quam voluptates ea molestiae, harum eveniet incidunt laudantium officia nemo nihil quod eius fugit. Quisquam excepturi similique aliquam tempora.";

const SockCardModal: FC<SockCardModalProps> = ({
  open,
  setOpen,
  name,
  price,
  image,
}) => {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
    <Dialog
      className="relative font-poppins z-10"
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
                        Sock name: <span className="text-gray-600">{name}</span>
                      </p>
                      <p className="lg:text-lg md:text-md">
                        Price: <span className="text-gray-600">N${price}</span>
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
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold border border-black text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                        onClick={() => setOpenEdit(true)}
                        data-autofocus
                      >
                        Edit sock
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
                data-autofocus
              >
                Close modal
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>

    <EditSockModal open={openEdit} setOpen={setOpenEdit} name={name} price={price} image={image} />
    </>
  );
};

export default SockCardModal;
