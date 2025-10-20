import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";


const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    thumbnail_url,
    author,
    rating,
    total_view,
    tags,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden space-y-5">
      {/* Author */}
      <div className="flex items-center justify-between bg-[#F3F3F3] p-5">
        <div className="flex items-center gap-3">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm">{author.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toISOString().split("T")[0]}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <CiBookmark></CiBookmark>
        <CiShare2></CiShare2>
      </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-md font-bold text-gray-800 leading-snug">
        {title}
      </h2>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          
          src={thumbnail_url}
          alt={title}
          className=" rounded-lg object-cover w-full h-80"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600 mb-2">
          {details.length > 180 ? details.slice(0, 180) + "..." : details}
        </p>
        <p className="text-sm text-gray-500">
          {tags.map((t, i) => (
            <span key={i}>#{t} </span>
          ))}
        </p>
        <Link to={`/news-details/${id}`} className="text-orange-500 font-medium mt-1 hover:underline">
          Read More
        </Link>
      </div>
      <span className="border border-accent mx-4"></span>
      {/* Footer */}
      <div className=" flex items-center justify-between px-4 pb-4 pt-2  text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
