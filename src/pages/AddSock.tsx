import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AddCatalogueModal from "../modals/AddCatalogueModal";
import supabase from "../config/supabaseClient";

// const categories = ["Formal", "Sport", "Funky", "Casual"];

const AddSocks = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [catalogDatas, setCatalogDatas] = useState<any[]>([]);
  const [sockName, setSockName] = useState("");
  const [catalogId, setCatalogId] = useState(""); // Assuming you have a way to select catalog ID
  const [sockPrice, setSockPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file");
    }
  };



  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();

    // Construct the object to insert into the database
    const newSock = {
      sock_name: sockName,
      sock_catalog_id: catalogId,
      sock_image_url: selectedImage,
      sock_price: parseFloat(sockPrice),
      description: description,
    };

    try {
      const { data, error } = await supabase.from("socks").insert([newSock]);

      if (error) {
        console.error("Error adding sock:", error);
        alert("Failed to add sock. Please try again.");
      } else {
        console.log("Sock added successfully:", data);
        // Optionally, reset form fields or provide feedback to the user
        setSockName("");
        setCatalogId("");
        setSelectedImage(null);
        setSockPrice("");
        setDescription("");
        alert("Sock added successfully!");
      }
    } catch (error) {
      console.error("Error adding sock:", error);
      alert("Failed to add sock. Please try again.");
    }
  };

  useEffect(() => {
    const fetchCatalogData = async () => {
      const { data, error } = await supabase.from("catalog").select();

      if (error) {
        console.log("There was error getting the catalog data", error);
        alert(error);
      }
      setCatalogDatas(data || []);
    };
    fetchCatalogData();
  });
  return (
    <>
      <Navbar index={1} />

      <main
        className="h-[90vh] md:h-[94vh] lg:h-[90vh] bg-main bg-cover bg-center bg-no-repeat flex flex-col justify-center font-poppins px-6 lg:px-8"
        id="bg-img"
      >
        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-2 shadow-lg rounded-lg pt-5 pb-5 px-4 bg-[#FFE500]"
            onSubmit={handleSubmit}
          >
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
                    className="mb-4 object-contain max-h-24 rounded-md shadow-md"
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

            <div className="flex gap-3 items-end">
              <div className="w-2/4">
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
                    required
                    value={catalogId}
                    onChange={(e) => setCatalogId(e.target.value)}
                  >
                    <option value="">Select Catalogue</option>
                    {catalogDatas.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.catalog_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-2/4">
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md border border-black px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:text-yellow-600 hover:border-yellow-600 transition-all"
                  onClick={() => setOpen(true)}
                >
                  Add catalogue
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
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
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600  sm:text-sm sm:leading-6"
                    value={sockName}
                    onChange={(e) => setSockName(e.target.value)}
                  />
                </div>
              </div>

              <div>
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
                    className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    value={sockPrice}
                    onChange={(e) => setSockPrice(e.target.value)}
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
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 outline-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center mt-4 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 transition-all"
              >
                Add sock
              </button>
            </div>
          </form>
        </div>
      </main>
      <AddCatalogueModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AddSocks;
