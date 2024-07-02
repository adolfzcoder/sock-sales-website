const SockCard = () => {
  return (
    <div className="max-w-sm md:w-96 lg:w-64 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Product Image" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">Product Title</h3>
            <p className="text-gray-700 mt-2">$99.99</p>
        </div>
    </div>
  )
}

export default SockCard
