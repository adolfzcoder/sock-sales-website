import CatalogProps from "../interfaces/CatalogProps.interface";

const Catalog: React.FC<CatalogProps> = ({name, image}) => {
  return (
    <div className="max-w-sm h-40 w-96 lg:w-64 mx-auto rounded-lg shadow-md overflow-hidden relative">
      <img src={image} alt="Image" className="w-full" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <p className="text-white text-4xl font-bold">{name}</p>
      </div>
    </div>
  );
};

export default Catalog;
