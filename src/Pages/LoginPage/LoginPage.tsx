import { useNavigate } from "react-router-dom";
import { errorAlert } from "../../Alerts/errorAlert";
import { successAlert } from "../../Alerts/successAlert";
import useAuth from "../../Hooks/useAuth/useAuth";

const LoginPage = () => {
  const { signinWithGoogle, setUserLoading } = useAuth();
  const navigate = useNavigate();

  const handleSigninWithGoogle = () => {
    if (signinWithGoogle) {
      signinWithGoogle()
        .then(() => {
          successAlert("Login successful!");
          console.log("Login successful!!!");
          navigate("/");
        })
        .catch(() => {
          errorAlert("Login failed!");
        })
        .finally(() => {
          if (setUserLoading) {
            setUserLoading(false);
          }
        });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card bg-background w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary hover:bg-secondary">Login</button>
          </div>
          <div className="divider"></div>
          <button
            className="btn"
            type="button"
            onClick={handleSigninWithGoogle}
          >
            Sign in Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
