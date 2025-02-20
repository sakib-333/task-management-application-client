import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="bg-background min-h-screen p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
