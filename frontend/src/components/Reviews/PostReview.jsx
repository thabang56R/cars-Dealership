import React, { useState } from "react";

export default function PostReview({ dealerId }) {
  const [reviewText, setReviewText] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Call Flask sentiment microservice
    const sentimentRes = await fetch("http://localhost:5001/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review: reviewText })
    });
    const sentimentData = await sentimentRes.json();

    // Step 2: Submit review + sentiment to Django backend
    const res = await fetch(`http://localhost:8000/dealer/${dealerId}/reviews/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review_text: reviewText, sentiment: sentimentData.sentiment })
    });
    const data = await res.json();

    setStatus(data.status || "Review submitted!");
    setReviewText("");
  };

  return (
    <div>
      <h3>Post a Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
        />
        <button type="submit">Submit Review</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

