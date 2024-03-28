import { Helmet } from "react-helmet-async";

import { imageBBUpload } from "../../Utils/imageUpload";
import { Link, useNavigate } from "react-router-dom";

// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import loginBackground from "../../assets/assets/others/authentication.png";
import loginImage from "../../assets/assets/others/authentication2.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useRef } from "react";
const Register = () => {
  const { register, user, update, loader, logout } = useAuth();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const imageForm = form.image.files[0];
    // const imageData = await imageBBUpload(imageForm);
    // console.log(imageData);

    // console.log(imageData?.data?.display_url);
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const userImage = imageData?.data?.display_url;
    const userInfo = {
      name,
      email,
      password,
      // userImage,
    };
    console.log(userInfo);
    try {
      const data = await register(email, password);
      await update(name);
      await logout();
      navigate("/login");
      toast.success("Registered Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div
        className="  min-h-screen"
        style={{
          backgroundImage: `url(${loginBackground})`,
        }}
      >
        <div className="hero-overlay  bg-opacity-0"></div>

        <div className="flex items-center justify-center   w-full  bg-transparent">
          <div className=" mt-28 shadow-2xl flex flex-row items-center  w-4/5 mx-auto  border-4 rounded-xl   p-20   ">
            <div className="w-3/5">
              <div className="text-center ">
                <h1 className="text-3xl text-center font-bold ">
                  Register now!
                </h1>
              </div>
              <div className=" flex-shrink-0   ">
                <form onSubmit={handleSubmit} className=" w-3/5 mx-auto">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      className="input input-bordered"
                      type="text"
                      placeholder="Your Name"
                      required
                      name="name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      required
                      name="email"
                      className="input input-bordered"
                    />
                  </div>
                  {/* <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoUrl</span>
                    </label>
                    <input
                      type="file"
                      placeholder="photo"
                      name="image"
                      required
                      id="image"
                      accept="image/*"
                    />
                  </div> */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className={`btn btn-primary 
                        bg-[#D1A054B2]
                       text-white border-none  hover:bg-black`}
                    >
                      {loader ? (
                        <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4 text-yellow-600">
                  Already registered? Go to
                  <Link to="/login" className="hover:underline text-blue-700">
                    {" "}
                    Login
                  </Link>
                </p>
                {/* <SocialLogin></SocialLogin> */}
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

export default Register;
