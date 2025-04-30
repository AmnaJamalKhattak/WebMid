import { Button } from "@/Components/ui/button";

function Navbar({ onNavClick }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-2 bg-white shadow-md border-b border-gray-200 font-inter">
      {/* Logo */}
      
      <img
          src="/assets/LightMode-Logo.png"
          alt="Light Mode Logo"
          className="w-[180px] h-[50px] object-contain"
      />
      

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center space-x-10 text-xl font-semibold text-gray-700">
        <li>
          <button onClick={onNavClick.home} className="hover:text-yellow-500 transition-colors duration-200">
            Home
          </button>
        </li>
        <li>
          <button onClick={onNavClick.about} className="hover:text-yellow-500 transition-colors duration-200">
            About
          </button>
        </li>
        <li>
          <button onClick={onNavClick.pricing} className="hover:text-yellow-500 transition-colors duration-200">
            Pricing
          </button>
        </li>
        <li>
          <button onClick={onNavClick.footer} className="hover:text-yellow-500 transition-colors duration-200">
            Contact
          </button>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <a href="/login">
          <Button variant="outline" className="text-medium rounded font-semibold border-gray-300 hover:bg-gray-100 transition-colors duration-200">Login</Button>
        </a>
        <a href="/signUp">
          <Button className="text-medium rounded font-semibold bg-yellow-400 hover:bg-yellow-500 text-white transition-colors duration-200">Sign Up</Button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
