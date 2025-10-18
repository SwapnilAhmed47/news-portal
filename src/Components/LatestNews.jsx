import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData } from 'react-router';

const LatestNews = () => {
    const [latest, setLatest] = useState([])

    const data = useLoaderData()

    useEffect(()=>{
        const latestNews = data.filter(news => news.others.is_today_pick===true)
        setLatest(latestNews)
        return
    },[data])
    console.log(latest)

    

    
    return (    
        <div className='flex  items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            
                <Marquee className='flex gap-5' pauseOnHover={true} speed={100}>
                    <div className='flex gap-5'>
                   {
                    latest.map(news => <p className='font-bold'>{news.title}.</p>)
                   }
                   </div>
                </Marquee>
                
        </div>
    );
};

export default LatestNews;