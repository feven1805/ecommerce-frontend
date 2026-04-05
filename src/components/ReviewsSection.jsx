import React, { useState, useEffect } from 'react';
import { FiImage, FiThumbsUp, FiStar } from 'react-icons/fi';
import { fetchDashboardData } from '../services/api';

function ReviewSection() {
  const [filter, setFilter] = useState('all');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await fetchDashboardData();
      setReviews(data.reviews || []);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === 'high') return review.rating >= 4;
    if (filter === 'low') return review.rating <= 2;
    if (filter === 'images') return review.hasImage;
    return true;
  });

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar key={i} className={i < rating ? 'star filled' : 'star'} />
    ));
  };

  if (loading) return <div className="loading">Loading reviews...</div>;

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h1>Reviews & Ratings</h1>
        <p>Analyze and curate the sentiment from your campus community. Your reputation is your greatest asset.</p>
      </div>

      <div className="filter-bar">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Reviews
        </button>
        <button 
          className={`filter-btn ${filter === 'high' ? 'active' : ''}`}
          onClick={() => setFilter('high')}
        >
          High Rated
        </button>
        <button 
          className={`filter-btn ${filter === 'low' ? 'active' : ''}`}
          onClick={() => setFilter('low')}
        >
          Low Rated
        </button>
        <button 
          className={`filter-btn ${filter === 'images' ? 'active' : ''}`}
          onClick={() => setFilter('images')}
        >
          With Images
        </button>
      </div>

      <div className="reviews-grid">
        {filteredReviews.length > 0 ? (
          filteredReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <h3 className="product-title">{review.product}</h3>
                <div className="rating">{renderStars(review.rating)}</div>
              </div>
              <p className="review-text">{review.text}</p>
              {review.hasImage && (
                <div className="review-image-badge">
                  <FiImage /> Contains Image
                </div>
              )}
              <div className="review-footer">
                <button className="helpful-btn">
                  <FiThumbsUp /> Helpful
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="review-card">
            <p className="review-text">No reviews yet. Be the first to leave a review!</p>
          </div>
        )}
      </div>

      <div className="review-form">
        <h3>TERMS AND CONDITIONS</h3>
        <p>No text, no copy, no credit card required.</p>
        <button className="submit-review-btn">Submit Your Review</button>
      </div>
    </div>
  );
}

export default ReviewSection;