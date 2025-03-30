import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div>
          <Link to="/client" className="p-2">Home</Link>
          <Link to="/client/profile" className="p-2">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
