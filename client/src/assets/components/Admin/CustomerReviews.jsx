import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const reviews = [
  { id: 1, user: "Mansi Tejani", rating: 5, comment: "Excellent service!", date: "2025-12-20" },
  { id: 2, user: "John Smith", rating: 3, comment: "Delivery was a bit late.", date: "2025-12-22" },
];

function CustomerReviews() {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      i < rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />
    ));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div key={rev.id} className="border-b pb-4 last:border-0">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{rev.user}</h4>
                <div className="flex gap-1 my-1">{renderStars(rev.rating)}</div>
              </div>
              <span className="text-sm text-gray-500">{rev.date}</span>
            </div>
            <p className="text-gray-600 mt-2 italic">"{rev.comment}"</p>
            <button className="mt-3 text-sm text-blue-600 hover:underline">Reply to Review</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;