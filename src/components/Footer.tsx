const currentYear = new Date().getFullYear();



const Footer = () => {
  return (
    <footer className="text-3xl py-5 bg-yellow-500">
        <p className="text-center">&copy; Kasi Socks {currentYear}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
