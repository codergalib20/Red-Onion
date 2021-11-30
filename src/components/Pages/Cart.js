import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import CardItems from './CardItems';


const Cart = () => {
    const {user} = useAuth()
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="container mx-auto px-3 grid grid-cols-2 min-h-screen gap-6">
                 <div className="mt-5">
                     <h1 className="font-medium text-gray-500 text-2xl">Edit delivery details</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg border-t border-gray-500 pt-6 mt-3">
                        <input className="w-full bg-gray-100 py-4 px-2 text-gray-700 mb-4 rounded-lg" defaultValue={user?.displayName} {...register("recipientName",{ required: true })} placeholder="Recipient's name"/>
                        <input className="w-full bg-gray-100 py-4 px-2 text-gray-700 mb-4 rounded-lg" {...register("country",{ required: true })} placeholder="Country"/>
                        <input className="w-full bg-gray-100 py-4 px-2 text-gray-700 mb-4 rounded-lg" {...register("city",{ required: true })} placeholder="City"/>
                        <input className="w-full bg-gray-100 py-4 px-2 text-gray-700 mb-4 rounded-lg" {...register("street",{ required: true })} placeholder="Streets"/>
                        <input className="w-full cursor-pointer bg-red-500 text-white py-4 px-2 rounded-lg" type="submit" value="Place Order" />
                    </form>
                 </div>
                 <div>
                     <CardItems/>
                 </div>
            </div>
        </div>
    );
};

export default Cart;