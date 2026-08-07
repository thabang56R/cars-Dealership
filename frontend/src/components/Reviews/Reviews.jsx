import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDealerReviews } from "../../services/api";
import PostReview from "./PostReview";

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDealerReviews(id);
      setReviews(data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Dealer Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.review_text} ({review.sentiment})
          </li>
        ))}
      </ul>
      <PostReview dealerId={id} />
    </div>
  );
}

