import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {image_url, title, details, category_id} = news
    return (
        <div className='border border-accent p-8 space-y-10 rounded-l'>
            <img className='w-full rounded-l' src={image_url} alt="" />
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-accent'>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;