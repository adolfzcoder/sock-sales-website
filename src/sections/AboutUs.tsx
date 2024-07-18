import logo from "../assets/logo-transparent-bg.png";

const AboutUs = () => {
  return (
    <section className="py-4 px-5 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold font-nunito">About Us</h2>
      <div className="bg-white flex flex-col lg:flex-row items-center justify-between md:py-5 pt-8 pb-12">
        <div className="w-full md:w-1/3 flex justify-center">
            <img src={logo} alt="logo" className="w-60" />
        </div>

        <div className="w-full md:w-2/3">
        <p>
            Kasi Socks is your go-to destination for stylish, comfortable, and affordable socks! We believe that socks are more than just a necessity – they are an essential fashion statement that can add a unique touch to any outfit.
        </p>

        <h2 className="mt-2 text-xl md:text-xl font-semibold  font-nunito">Our Story</h2>
        <p>
        Founded in 2020, KasiSocks started with a simple mission: to bring high-quality, stylish socks to everyone. Inspired by the vibrant and diverse culture of the Kasi (townships), we set out to create a brand that embodies creativity, community, and comfort.
        </p>

        <h2 className="mt-2 text-xl md:text-xl font-semibold  font-nunito">Our Products</h2>
        <p>
        At KasiSocks, we offer a wide range of socks to suit every style and occasion. From bold, colorful patterns to classic, understated designs, our collection is designed to cater to all tastes. We pride ourselves on using premium materials to ensure that our socks are not only stylish but also durable and comfortable.
        </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
