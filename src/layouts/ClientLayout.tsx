import Navbar from "../components/client/Navbar";

const ClientLayout = ({ children }:any) => {
  return (
    <div>
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default ClientLayout;
