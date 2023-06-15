import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

function Rating({ratingValue, ratingText}) {
  return (
    <div>
      <span>
        {ratingValue >= 1 ? (
          <FaStar className='text-warning' />
        ) : ratingValue === 0.5 ? (
          <FaStarHalfAlt className='text-warning' />
        ) : (
          <FaRegStar className='text-warning' />
        )}
      </span>
      <span>
        {ratingValue >= 2 ? (
          <FaStar className='text-warning' />
        ) : ratingValue === 1.5 ? (
          <FaStarHalfAlt className='text-warning' />
        ) : (
          <FaRegStar className='text-warning' />
        )}
      </span>
      <span>
        {ratingValue >= 3 ? (
          <FaStar className='text-warning' />
        ) : ratingValue === 2.5 ? (
          <FaStarHalfAlt className='text-warning' />
        ) : (
          <FaRegStar className='text-warning' />
        )}
      </span>
      <span>
        {ratingValue >= 4 ? (
          <FaStar className='text-warning' />
        ) : ratingValue === 3.5 ? (
          <FaStarHalfAlt className='text-warning' />
        ) : (
          <FaRegStar className='text-warning' />
        )}
      </span>
      <span>
        {ratingValue >= 5 ? (
          <FaStar className='text-warning' />
        ) : ratingValue === 4.5 ? (
          <FaStarHalfAlt className='text-warning' />
        ) : (
          <FaRegStar className='text-warning' />
        )}
      </span>
      <span className='text-secondary text-align-center ms-2'>
        {ratingText}
      </span>
    </div>
  );
}

export default Rating;
