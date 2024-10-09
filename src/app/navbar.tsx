export default function Navbar() {
    return (
      <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-6 py-[12px] flex justify-between items-center shadow-sm fixed top-0 w-full z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-black dark:text-white text-lg font-bold flex items-center">
          <img
                  src="/KrispieKreme.png" // Correct path to the public folder
                  alt="Logo"
                  className="w-auto h-[55px] rounded-full"
                />
          </div>
        </div>
  
        {/* Right side buttons */}
        {/* <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium">
            Krispie Kreme
          </button>
        </div> */}
      </nav>
    );
  }  