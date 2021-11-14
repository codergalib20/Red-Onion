import React from 'react';
import homeBanner from '../../images/bannerbackground.png';
import Foods from './Foods';


const Home = () => {
    const customizeBannerSection = {
        background : `url(${homeBanner}) no-repeat top center`,
        minHeight : '95vh',
    }
    return (
        <div>
            <div style={customizeBannerSection} className="flex items-center justify-center">
                <div>
                    <h1 className="text-5xl font-bold text-gray-900">Best food waiting for your belly</h1>
                    <div className="w-full mx-auto max-w-xl grid rounded-full bg-white overflow-hidden mt-5 grid-cols-10">
                        <input className="col-span-8 px-5 py-3 outline-none" type="text" placeholder="search food items" />
                        <button className="bg-red-500 text-white font-medium capitalize col-span-2 py-2 rounded-full">search</button>
                    </div>
                </div>
            </div>
            <Foods/>
        </div>
    );
};

export default Home;