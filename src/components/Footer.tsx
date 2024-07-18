import footerLogo from "../assets/logo-rec.jpg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import copyrightSign from "../assets/icons/copyright-sign.svg";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];

  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Special Sock 1", link: "/" },
        { name: "Special Sock 2", link: "/" },
        { name: " Special Sock 3", link: "/" },
        { name: "Special Sock 4", link: "/" },
        { name: "Special Sock 5", link: "/" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "About us", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "How it works", link: "/" },
        { name: "Privacy policy", link: "/" },
        { name: "Payment policy", link: "/" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "kasi@gmail.com", link: "mailto:kasi@gmail.com" },
        { name: "+264 8186 23542", link: "tel:+92554862354" },
      ],
    },
  ];

  return (
    <footer className="w-full font-poppins bg-black text-white px-5 md:px-12 py-10">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-center md:items-start">
          <a href="/">
            <img src={footerLogo} alt="Footer logo" width={150} height={40} className="rounded-md" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get socks ready for every single thing at Kasi. Find our perfect fit for you. Don't waste time.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-slate-gray cursor-pointer transition-all">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col-reverse max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Kasi Socks {currentYear}. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
