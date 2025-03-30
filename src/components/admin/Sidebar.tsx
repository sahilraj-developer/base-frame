import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5 h-full">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <nav className="mt-4">
        <Link to="/admin" className="block p-2 hover:bg-gray-800 rounded">Dashboard</Link>
        <Link to="/admin/users" className="block p-2 hover:bg-gray-800 rounded">Users</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
