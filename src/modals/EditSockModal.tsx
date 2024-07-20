import { FC, useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import supabase from "../config/supabaseClient";

interface EditSockModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  price: number;
  image: string;
}

// const categories = ["Formal", "Sport", "Funky", "Casual"];
// const description =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, magni aliquam! Quam voluptates ea molestiae, harum eveniet incidunt laudantium officia nemo nihil quod eius fugit. Quisquam excepturi similique aliquam tempora.";

const EditSockModal: FC<EditSockModalProps> = ({
  open,
  setOpen,
  name,
  price,
  image,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [, setCatalogue] = useState();
  const [description, setDescription] = useState();
  const [, setSockDatas] = useState<any[]>([]);
  const [catalogDatas, setCatalogDatas] = useState<any[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Please select a valid image file");
    }
  };

  useEffect(() => {
    setSelectedImage(image);
    const fetchSockData = async () => {
      const { data, error } = await supabase
        .from("socks")
        .select("*, catalog(*)")
        .eq("sock_name", name);

      if (error) {
        return console.log(error);
      }
      setCatalogue(data[0].catalog.catalog_name);
      setDescription(data[0].description);
      setSockDatas(data);
    };
    const fetchCatalogData = async () => {
      const { data, error } = await supabase.from("catalog").select();

      if (error) {
        console.log("There was error getting the catalog data", error);
        console.log(error);
      }
      setCatalogDatas(data || []);
    };
    fetchCatalogData();
    fetchSockData();
  }, []);

  return (
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
                    Edit Sock
                  </DialogTitle>
                  <section className="w-full">
                    <form className="space-y-1 shadow-lg rounded-lg pt-0 pb-5 px-4">
                      <div>
                        <div className=" flex justify-center">
                          <input
                            id="file-input"
                            type="file"
                            onChange={handleImageChange}
                            className="hidden"
                            accept="image/*"
                          />
                          {selectedImage && (
                            <img
                              src={selectedImage}
                              alt="Selected"
                              className="mb-4 object-contain max-h-20 rounded-md shadow-md"
                            />
                          )}
                        </div>
                        <div className="flex justify-center">
                          <label
                            htmlFor="file-input"
                            className="px-3 py-2 bg-yellow-600 w-full text-center text-white rounded-md shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
                          >
                            Select a picture
                          </label>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="catalogue"
                              className="block text-sm md:text-base lg:text-lg font-medium leading-6 text-black"
                            >
                              Catalogue
                            </label>
                          </div>
                          <div className="mt-2">
                            <select
                              id="catalogue"
                              className="block w-full rounded-md border-0 py-2 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 outline-none"
                            >
                              {catalogDatas.map((item) => (
                                <option key={item.id} id={item.id}>
                                  {item.catalog_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-2/4">
                          <label
                            htmlFor="sock-name"
                            className="block text-sm md:text-base lg:text-lg font-medium leading- text-black"
                          >
                            Sock name
                          </label>
                          <div className="mt-1">
                            <input
                              id="sock-name"
                              type="text"
                              autoComplete="sock-name"
                              required
                              value={name}
                              className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600  sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="w-2/4">
                          <label
                            htmlFor="sock-price"
                            className="block text-sm md:text-base lg:text-lg font-medium leading-6 text-black"
                          >
                            Sock price (In N$)
                          </label>
                          <div>
                            <input
                              id="sock-price"
                              type="number"
                              autoComplete="sock-price"
                              required
                              value={price}
                              className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="sock-price"
                          className="block text-sm md:text-base lg:text-lg font-medium leading-6 text-black"
                        >
                          Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="sock-price"
                            draggable="false"
                            autoComplete="sock-price"
                            required
                            value={description}
                            className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 outline-none"
                          ></textarea>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center mt-4 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 transition-all"
                        >
                          Edit sock
                        </button>
                      </div>
                    </form>
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
  );
};

export default EditSockModal;
