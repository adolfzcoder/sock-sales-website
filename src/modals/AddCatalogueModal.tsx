import { FC, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import supabase from "../config/supabaseClient";

interface SockCardModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddCatalogueModal: FC<SockCardModalProps> = ({ open, setOpen }) => {
  const [catalogName, setCatalogName] = useState("");

  const handleAddCatalog = async () => {
    try {
      const { data, error } = await supabase
        .from("catalog")
        .insert([{ catalog_name: catalogName }]);

      if (error) {
        throw error;
      }

      console.log("Catalog inserted successfully:", data);
      // Optionally, you can close the modal after successful insertion
      setOpen(false);
    } catch (error) {
      console.log("error in catch", error);
      console.log(error);
      // Handle error state or display an error message
    }
  };

  return (
    <Dialog
      className="relative font-poppins z-10"
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg sm:my-8"
          >
            <div className="bg-white px-4 pb-4 pt-3 md:pt-2 sm:p-6 sm:pb-4">
              <div>
                <div className="md:mt-2 md:text-center sm:mt-1 sm:text-left">
                  <DialogTitle
                    as="h2"
                    className="text-xl md:text-2xl font-semibold leading-6 mb-2 md:mb-0 text-gray-900"
                  >
                    Add a new catalogue
                  </DialogTitle>
                  <section className="w-full">
                    <div className="flex flex-col md:flex-row justify-between md:mt-3 w-full">
                      <p className="text-lg md:text-md">Catalogue name</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-1 md:mt-1 w-full">
                      <input
                        id="catalogue"
                        type="text"
                        autoComplete="catalogue"
                        required
                        value={catalogName}
                        onChange={(e) => setCatalogName(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="mt-2 md:mt-4 w-full">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-yellow-500 shadow-sm hover:bg-yellow-600 hover:text-white"
                          onClick={handleAddCatalog}
                        >
                          Add catalogue
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex justify-center px-4 md:pt-1 pb-5 sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                onClick={() => setOpen(false)}
                autoFocus
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

export default AddCatalogueModal;
