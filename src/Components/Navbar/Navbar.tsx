import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { successAlert } from "../../Alerts/successAlert";
import { errorAlert } from "../../Alerts/errorAlert";

const Navbar = () => {
  const { user, signoutUser, setUserLoading } = useAuth();

  const handleLogOut = () => {
    if (signoutUser) {
      signoutUser()
        .then(() => {
          successAlert("Logout successful!");
        })
        .catch(() => {
          errorAlert("Logout failed!");
        })
        .finally(() => {
          if (setUserLoading) {
            setUserLoading(false);
          }
        });
    }
  };

  return (
    <div className=" bg-primary p-4 flex justify-between items-center">
      <h1 className="font-bold">Task</h1>

      <div>
        {user ? (
          <div className="flex items-center gap-2">
            <img
              className="w-9 h-9 rounded-full"
              src={user?.photoURL}
              alt="photo"
            />
            <button onClick={handleLogOut}>Logout</button>
          </div>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
