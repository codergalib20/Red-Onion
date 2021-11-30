import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import backgroundImage from "../../images/bannerbackground.png";
import logoTwo from "../../images/logo2.png";
const registerBackground = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const Login = () => {
  const {signIn, isLoading}= useAuth()
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const location = useLocation();    
  const onSubmit = (data) => {
    signIn(data.email,data.password, location, history)
  };
  return (
    <>
    {!isLoading && <div
      style={registerBackground}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="card px-8 py-16 w-full max-w-lg">
        <div className="card-header flex justify-center">
          <Link to="/">
            <img className="w-56" src={logoTwo} alt="" />
          </Link>
        </div>
        <div className="card-body pt-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className=" rounded-md w-full bg-gray-50 py-3 px-4 mb-5"
              {...register("email", { required: true })}
              placeholder="E-mail"
            />
            <input
              className=" rounded-md w-full bg-gray-50 py-3 px-4 mb-5"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <input
              className="cursor-pointer rounded-md w-full bg-red-500 font-medium text-md text-white py-3 px-4 mb-3"
              type="submit"
            />
          </form>
        </div>
        <div className="text-center">
          <Link to="/register" className="text-red-500 font-bold ">
            Are you a new user?
          </Link>
        </div>
      </div>
    </div>}
    {
      isLoading && <div className="flex items-center justify-center min-h-screen">
         <div className="flex items-center justify-center min-h-screen">
           <div class="lds-hourglass"></div>
         </div>
      </div>
    }
    </>
  );
};

export default Login;
