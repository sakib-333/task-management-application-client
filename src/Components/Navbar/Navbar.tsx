import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-primary p-4 flex justify-between items-center">
      <h1 className="font-bold">Task</h1>

      <div>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
