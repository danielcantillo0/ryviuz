import React from 'react';
import './ReviewPreview.css';

const ReviewPreview = ({ title, image, score, review, onSeeMore }) => {
    return (
        <div className="review-preview">
            <img src={image} alt={title} className="review-image" />
            <div className="review-content">
                <h2>{title}</h2>
                <div className="review-score">Score: {score}</div>
                <p className="review-text">
                    {review.substring(0, 200)}...
                    <span className="see-more" onClick={onSeeMore}>See more</span>
                </p>
            </div>
        </div>
    );
};

export default ReviewPreview;
