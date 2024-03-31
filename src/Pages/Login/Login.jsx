import loginBackground from "../../assets/assets/others/authentication.png";
import loginImage from "../../assets/assets/others/authentication2.png";

import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../Utils/user";
import { getToken } from "../../Utils/jwt";

const Login = () => {
  const { login, user, loader } = useAuth();

  const location = useLocation();
  const to = location?.state?.from?.pathname || "/";
  console.log(to);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // const from = location.state?.from?.pathname || "/";
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then(async (result) => {
        try {
          const dbResponse = await saveUser(result?.user);
          const tokenResponse = await getToken(result?.user?.email);
          console.log(result?.user?.email);
        } catch (err) {
          console.log(err);
        }
        toast.success("Successfully login");
        navigate(to, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.message}`);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        className="  min-h-screen"
        style={{
          backgroundImage: `url(${loginBackground})`,
        }}
      >
        <div className="hero-overlay  bg-opacity-0"></div>

        <div className="flex items-center justify-center   w-full  bg-transparent">
          <div className=" mt-28 shadow-2xl flex flex-row-reverse items-center w-4/5 mx-auto  border-4 rounded-xl   p-20   ">
            <div className="w-3/5">
              <div className="text-center ">
                <h1 className="text-3xl text-center font-bold ">Login now!</h1>
              </div>
              <div className=" flex-shrink-0   ">
                <form onSubmit={handleLogin} className=" w-3/5 mx-auto">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
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
                      name="password"
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
                    <button
                      disabled={false}
                      type="submit"
                      className="btn btn-primary 
                        bg-[#D1A054B2]
                       text-white border-none  hover:bg-black"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4 text-yellow-600">
                  New here? Create a{" "}
                  <Link
                    to="/register"
                    className="hover:underline text-blue-700"
                  >
                    New Account
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-2/5">
              <img className="w-[500px]" src={loginImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
