const currentYear = new Date().getFullYear();



const Footer = () => {
  return (
    <footer className="md:text-2xl py-5 bg-yellow-500 font-poppins">
        <p className="text-center">&copy; Kasi Socks {currentYear}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
