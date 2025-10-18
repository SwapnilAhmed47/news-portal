import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"


const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 mt-10'>
            <h2 className='font-bold text-xl my-5'>Q-Zone</h2>
            <div className='space-y-5 '>
                <img className='w-full' src={swimmingImg} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;