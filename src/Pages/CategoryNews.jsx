import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()

    const [categoryNews, setCategoryNews] = useState([])
    // console.log(data)

    useEffect(()=>{
        if(id=="0"){
            setCategoryNews(data)
            return
        }
        else if(id=="1"){
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
            return
        }
        else{
            const filteredNews = data.filter(news => news.category_id == id)
            console.log(filteredNews)
            setCategoryNews(filteredNews)
        }
        
    },[data, id])

    return (
        <div>
            <h2 className='font-bold text-xl'>Total <span className='text-red-600'>{categoryNews.length}</span> News Found</h2>
            <div className='flex flex-col gap-10 mt-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;