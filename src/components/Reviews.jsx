import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/movieAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const {movieId} = useParams();
  

  useEffect(() => {
    async function getAllReviews() {
      try {
          const data = await getReviews(movieId);
          if (!data.total_results) {
            throw new Error("We don't have any reviews for this movie");
          }
        setReviews(data.results);
      } catch (error) {
          setError(error)
      }
    }
    getAllReviews();
  }, [movieId]);

  return (
      <>
          {error && <p>{ error.message}</p>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
