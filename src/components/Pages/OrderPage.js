import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { Link, useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const OrderPage = () => {
  const {user} = useAuth();
  const { order } = useParams();
  const history = useHistory();
  const [food, setFood] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/foods/${order}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [order]);

  const { name, img, img2, para, price } = food;
  const [selectedImg, setSelectedImg] = useState("");
  const [cartCount, setCartCount] = useState(1);

  const handleClickAddToCart = (foodData) => {
      const data = {}
      data.for = foodData.for;
      data.name = foodData.name;
      data.img = foodData.img;
      data.img2 = foodData.img2;
      data.para = foodData.para;
      data.price = foodData.price;
      data.userName = user.displayName;
      data.email = user.email;
      data.count = cartCount;
      
      // fetch('http://localhost:5000/orders', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      //     .then((res) => res.json())
      //     .then((data) => {
      //         console.log(data);
      //     })
      // })
      fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Add Cart", "Your product cart added", "success");
          history.replace("/cart");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-6">
        <Link to="/">Home</Link>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl font-medium mb-3">{name}</h1>
          <p className="text-base font-medium text-gray-500 text-justify">
            {para}
          </p>
          <div className="flex items-center py-6">
            <h1 className="mr-4 font-medium text-3xl text-gray-800">
              ${price}
            </h1>
            <div className="flex items-center justify-between px-2 border border-gray-200 rounded-full w-28 py-3">
              <AiOutlineMinus
                onClick={() =>
                  setCartCount(cartCount <= 1 ? cartCount - 0 : cartCount - 1)
                }
                className="w-1/4 text-lg font-bold cursor-pointer"
              />
              <input
                readOnly
                type="number"
                value={cartCount}
                className="outline-none col-span-3 w-1/2 text-center"
              />
              <AiOutlinePlus
                onClick={() =>
                  setCartCount(cartCount >= 10 ? cartCount + 0 : cartCount + 1)
                }
                className="w-1/4 text-lg font-bold cursor-pointer"
              />
            </div>
          </div>
          <button
            onClick={() => handleClickAddToCart(food)}
            className="cursor-pointer flex items-center justify-center rounded-full w-28 bg-red-500 text-white p-2 "
          >
            <ImCart className="mr-2" /> Add{" "}
          </button>

          <div>
            <div className="flex items-center pt-10">
              <img
                onClick={() => setSelectedImg(img)}
                className="w-40 mr-5 cursor-pointer"
                src={img}
                alt=""
              />
              <img
                onClick={() => setSelectedImg(img2)}
                className="w-40 cursor-pointer"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-4/5" style={{marginLeft: 'auto'}}
            src={!selectedImg ? img : selectedImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
