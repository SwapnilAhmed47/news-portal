import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold text-xl mt-8'>Find us on</h2>
            <div>
                <div className="join join-vertical w-full mt-5">
                <button className="p-8 btn bg-base-100 join-item justify-start"><FaFacebook size={25}></FaFacebook>  Facebook</button>
                <button className="p-8 btn bg-base-100 join-item justify-start"><FaTwitter size={25}></FaTwitter> Twitter</button>
                <button className="p-8 btn bg-base-100 join-item justify-start"><FaInstagram size={25}></FaInstagram> Instagram</button>
            </div>
            </div>
        </div>
    );
};

export default FindUs;