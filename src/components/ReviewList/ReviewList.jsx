// ReviewList.js
import React, { useState } from 'react';
import ReviewPreview from '../ReviewPreview/ReviewPreview';
import './ReviewList.css';

const reviews = [
    {
        id: 1,
        title: 'Movie Title 1',
        image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        score: 8.5,
        review: 'This is a detailed review of the movie...',
        category: 'Movies'
    },
    {
        id: 2,
        title: 'Movie Title 2',
        image: 'https://images.unsplash.com/photo-1616829627749-c6dba67708ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1bWFuJTIwc2hvd3xlbnwwfHwwfHx8MA%3D%3D',
        score: 7.8,
        review: 'This is another detailed review of a movie...',
        category: 'Movies'
    },
    {
        id: 3,
        title: 'Book Title 1',
        image: 'https://plus.unsplash.com/premium_photo-1676057875510-f73d9d5950e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
        score: 9.2,
        review: 'This is a detailed review of the book...',
        category: 'Books'
    },
    {
        id: 4,
        title: 'Book Title 2',
        image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
        score: 8.9,
        review: 'This is another detailed review of a book...',
        category: 'Books'
    },
    {
        id: 5,
        title: 'Series Title 1',
        image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHYlMjBzZXJpZXN8ZW58MHx8MHx8fDA%3D',
        score: 8.0,
        review: 'This is a detailed review of the series...',
        category: 'Series'
    },
    {
        id: 6,
        title: 'Series Title 2',
        image: 'https://images.unsplash.com/photo-1606937295547-bc0f668595b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHYlMjBzZXJpZXN8ZW58MHx8MHx8fDA%3D',
        score: 8.7,
        review: 'This is another detailed review of a series...',
        category: 'Series'
    },
    {
        id: 7,
        title: 'Anime Title 1',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8fDA%3D',
        score: 8.5,
        review: 'This is a detailed review of the anime...',
        category: 'Anime'
    },
    {
        id: 8,
        title: 'Anime Title 2',
        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D',
        score: 8.3,
        review: 'This is another detailed review of an anime...',
        category: 'Anime'
    }
    // Add more reviews as needed
];


const ReviewList = ({ category }) => {
    const [selectedReview, setSelectedReview] = useState(null);

    const handleSeeMore = (review) => {
        setSelectedReview(review);
        // Handle "See more" action, like navigating to a detailed review page
    };

    // Filter reviews based on the category
    const filteredReviews = reviews.filter(review => review.category === category);

    return (
        <div className="review-list">
            {filteredReviews.map(review => (
                <ReviewPreview
                    key={review.id}
                    title={review.title}
                    image={review.image}
                    score={review.score}
                    review={review.review}
                    onSeeMore={() => handleSeeMore(review)}
                />
            ))}
            {selectedReview && (
                <div className="full-review">
                    <h2>{selectedReview.title}</h2>
                    <img src={selectedReview.image} alt={selectedReview.title} />
                    <div>Score: {selectedReview.score}</div>
                    <p>{selectedReview.review}</p>
                </div>
            )}
        </div>
    );
};

export default ReviewList;

