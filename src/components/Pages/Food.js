import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';



const Food = ({food}) => {
    
    return (
        <Zoom>
            <div className="shadow hover:shadow-2xl p-5 transform scale-100 hover:scale-105 smooth-animation">
                <span className="py-2 px-5 bg-red-100 text-red-600 border border-red-600 font-medium rounded-full">{food.for}</span>
                <img className="w-8/12 mx-auto pb-3 pt-3 transform scale-100 hover:scale-110 smooth-animation" src={food.img} alt={food.name} />
                <div className="text-center w-9/12 mx-auto">
                    <h2 className="text-xl font-medium">{food.name}</h2>
                    <p className="py-2 text-gray-600">{food.para.substring(0, 50)}</p>
                    <h3 className="text-xl font-bold mb-4 text-red-600">${food.price}</h3>
                    <Link to={`/food/${food._id}`} className="bg-red-100 hover:text-gray-50 hover:bg-yellow-600 border border-red-600 hover:border-yellow-600 rounded-full px-8 py-2 text-red-600 smooth-animation">Order Now</Link>
                </div>
            </div>
        </Zoom>
    );
};

export default Food;