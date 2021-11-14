import React, { useEffect, useState } from 'react';
import Food from './Food';


const Foods = () => {
    const [foodType, setFoodType] = useState('breakfast');
    const [foods, setFoods] = useState([]);
    useEffect(()=> { 
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    const filterFoods = foods.filter(food => food.for.toLowerCase() === foodType);
    return (
        <div className="container mx-auto px-10">
            <div className="py-20 flex items-center justify-center">
            <div>
                <button id={foodType === 'breakfast' ? 'active' : '' } className="text-lg font-medium text-yellow-700 bg-yellow-100 py-2 px-6 rounded-full mx-5" onClick={() => setFoodType('breakfast')}>Breakfast</button>
                <button id={foodType === 'lunch' ? 'active' : '' } className="text-lg font-medium text-yellow-700 bg-yellow-100 py-2 px-6 rounded-full mx-5" onClick={() => setFoodType('lunch')}>Lunch</button>
                <button id={foodType === 'dinner' ? 'active' : '' } className="text-lg font-medium text-yellow-700 bg-yellow-100 py-2 px-6 rounded-full mx-5" onClick={() => setFoodType('dinner')}>Dinner</button>
            </div>
            </div>
            <div className="grid grid-cols-3 gap-10 pb-10">
                {   
                    filterFoods.map(food => <Food key={food.key} food={food}></Food>)
                }
            </div>
            <div className="py-10 text-center">
                <button className="text-white bg-gray-300 font-medium py-3 px-12 rounded-md hover:bg-red-500 smooth-animation">Checkout your food</button>
            </div>
        </div>
    );
};

export default Foods;