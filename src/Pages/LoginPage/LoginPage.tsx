import { useNavigate } from "react-router-dom";
import { errorAlert } from "../../Alerts/errorAlert";
import { successAlert } from "../../Alerts/successAlert";
import useAuth from "../../Hooks/useAuth/useAuth";
import { UserCredential } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const LoginPage = () => {
  const { signinWithGoogle, setUserLoading } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSigninWithGoogle = () => {
    if (signinWithGoogle) {
      signinWithGoogle()
        .then((_UserImpl: UserCredential) => {
          const { displayName, email } = _UserImpl.user;
          axiosPublic
            .post("/registration", { name: displayName, email })
            .then(({ data }) => {
              if (data.acknowledgement) {
                successAlert("Login successful!");
                navigate("/");
              }
            });
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
