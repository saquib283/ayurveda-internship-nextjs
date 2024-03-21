import React from 'react';
import Rating from './Rating';


type StartRatingProps = {
    title : string,
    desc:string,
}

const StarRating = (props:StartRatingProps) => {
  return (
    <div className='flex flex-col font-kadwa justify-center items-start'>

        <div>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        <p className='text-sm text-gray-500'>{props.desc}</p>
        </div>

        <Rating/>

    </div>
  )
}

export default StarRating