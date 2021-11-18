import React from 'react';
import { ImCart } from "react-icons/im";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import HeaderLogoTwo from '../../images/logo2.png';

const Header = () => {
    const {user} = useAuth() 
    return (
        <div>
             <div className="container mx-auto flex items-center justify-between py-2 shadow-sm">
                <div className="w-48">
                    <Link to="/">
                        <img className="w-full" src={HeaderLogoTwo} alt="" />
                    </Link>
                </div>
                <nav className="flex items-center ">
                    <NavLink className="flex items-center text-lg text-gray-900" to="/"><ImCart/></NavLink>
                    {
                        user?.email ? 
                          <button>Logout</button>
                        :
                        <div>
                            <NavLink className="text-md font-medium ml-5" to="/login">Login</NavLink>
                            <NavLink className="text-md font-medium ml-5 py-2 px-5 bg-red-500 text-white rounded-full" to="/register">Sign up</NavLink>
                        </div>
                    }
                </nav>
             </div>
        </div>
    );
};

export default Header;