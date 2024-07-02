import Navbar from "../components/Navbar";
import logo from "../assets/logo-transparent-bg.png";
import Catalog from "../components/Catalog";
import catalogImage1 from "../assets/catalog-1.jpg";
import catalogImage2 from "../assets/catalog-2.jpg";
import catalogImage3 from "../assets/catalog-3.jpg";
import catalogImage4 from "../assets/catalog-4.jpg";
import Hero from "../sections/Hero";

const catalogues = [
  {
    id: 1,
    name: "Formal",
    image: catalogImage1
  },
  {
    id: 2,
    name: "Sport",
    image: catalogImage2
  },
  {
    id: 3,
    name: "Funky",
    image: catalogImage3
  },
  {
    id: 4,
    name: "Casual", 
    image: catalogImage4
  }
];

const Home = () => {
  return (
    <>
     <Navbar index={0} /> 

     <main className="font-poppins">
        <div className="flex justify-center">
            <img src={logo} alt="" />
        </div>

        <section className="bg-white md:py-10 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-10 gap-y-9 pt-8 pb-5">
          {catalogues.map(({id, name, image}) => (
            <Catalog key={id} name={name} image={image} />
          ))}

        </section>

          <Hero />
     </main>
    </>
  )
}

export default Home
