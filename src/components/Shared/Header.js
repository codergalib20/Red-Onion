import React from 'react';
import { ImCart } from "react-icons/im";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import HeaderLogoTwo from '../../images/logo2.png';
import CartLength from '../Pages/CartLength';

const Header = () => {
    const {user,logOut} = useAuth() 
    return (
        <div>
             <div className="container mx-auto flex items-center justify-between py-2 shadow-sm">
                <div className="w-48">
                    <Link to="/">
                        <img className="w-full" src={HeaderLogoTwo} alt="" />
                    </Link>
                </div>
                <nav className="flex items-center ">
                    <button className="flex items-center text-lg text-gray-900 relative" to="/"><ImCart/>
                     <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-4 px-1 text-sm">
                        <CartLength />
                    </div>
                    </button>
                    {
                        user?.email ? 
                          <div>     
                               {
                                   user?.displayName && <span className="text-xl pl-4 font-medium text-black">{user?.displayName}</span>
                               }                                
                             <button className="text-md font-medium ml-5 py-2 px-5 bg-red-500 text-white rounded-full" onClick={logOut}>Sign Out</button>
                          </div>
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