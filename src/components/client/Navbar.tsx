import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">MyApp</h1>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/client" className="p-2 hover:text-gray-200 transition">Home</Link>
          <Link to="/client/profile" className="p-2 hover:text-gray-200 transition">Profile</Link>
          <Link to="/client/products" className="p-2 hover:text-gray-200 transition">Products</Link>
          <Link to="/settings" className="p-2 hover:text-gray-200 transition">Settings</Link>
          <Link to="/logout" className="p-2 hover:text-gray-200 transition">Logout</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 bg-blue-600 p-4 rounded-lg shadow-md">
          <Link to="/client" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/client/profile" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Profile</Link>
          <Link to="/client/products" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/settings" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Settings</Link>
          <Link to="/logout" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Logout</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
