import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import backgroundImage from "../../images/bannerbackground.png";
import logoTwo from "../../images/logo2.png";
import '../Shared/Spinner.css';


const registerBackground = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Register = () => {
  const { register, handleSubmit } = useForm();
  const {newUser, isLoading } = useAuth()
  const history = useHistory()
  const onSubmit = (data) => {
      if(data.password !== data.password2){
          swal("Password not match", "", "error");
          return;
      }
      newUser(data.email, data.password, data.name,  history)
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
              {...register("name", { required: true })}
              placeholder="Name"
            />
            <input
              className=" rounded-md w-full bg-gray-50 py-3 px-4 mb-5"
              {...register("email", { required: true })}
              placeholder="E-mail"
            />
            <input type="password"
              className=" rounded-md w-full bg-gray-50 py-3 px-4 mb-5"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <input type="password"
              className=" rounded-md w-full bg-gray-50 py-3 px-4 mb-5"
              {...register("password2", { required: true })}
              placeholder="Confirm Password"
            />
            <input
              className="cursor-pointer rounded-md w-full bg-red-500 font-medium text-md text-white py-3 px-4 mb-3"
              type="submit"
            />
          </form>
        </div>
        <div className="text-center">
          <Link to="/login" className="text-red-500 font-bold ">
            Already have an account
          </Link>
        </div>
      </div>
    </div>
    }
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

export default Register;
