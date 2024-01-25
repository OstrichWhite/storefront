const Navbar = () => (
  <nav className="bg-gray-800 flex justify-between p-4 items-center">
    <div className="text-white text-lg font-bold">Store Name</div>
    <div className="flex space-x-4">
      <div className="text-white hover:text-gray-400">Home</div>
      <div className="text-white hover:text-gray-400">Catelog</div>
      <div className="text-white hover:text-gray-400">Contact</div>
    </div>
    <div className="flex items-center space-x-4">
      <div className=" relative text-white">
        <input
          type="text"
          placeholder="Search"
          className=" px-2 py-1 bg-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
        />
      </div>
      <div className="text-white hover:text-gray-400">Cart</div>
    </div>
  </nav>
);

export default Navbar;

{
  /* 
    <nav class="bg-gray-800 p-4 flex items-center justify-between">
  <div class="text-white text-lg font-bold">Store Name</div>
  <div class="flex space-x-4">
    <div class="text-white hover:text-gray-400 transition">Home</div>
    <div class="text-white hover:text-gray-400 transition">Catalog</div>
    <div class="text-white hover:text-gray-400 transition">Contact</div>
  </div>
  <div class="text-white">Search</div>
  <div class="relative text-white">
  <input
    type="text"
    placeholder="Search..."
    class="py-2 px-4 bg-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
  />
  <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none">
    <i class="fas fa-search"></i>
  </button>
</div>

  <div class="text-white">Cart</div>
</nav>

  */
}
