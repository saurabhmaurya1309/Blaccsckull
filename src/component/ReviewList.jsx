// ReviewList.js
import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';
import reviewsData from './reviewsData.json'; // Assuming the file is in the same directory

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    console.log(reviewsData);
    
    setReviews(reviewsData);
    console.log(reviews);
    
  }, [reviews]);

  return (
    <div className="p-4">
    {reviews.map(review => (
      <ReviewHighlighter key={review.review_id} review={review} />
    ))}
  </div>
  );
};

export default ReviewList;
