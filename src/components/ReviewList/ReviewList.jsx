// ReviewList.js
import React, { useState, useEffect } from 'react';
import ReviewPreview from '../ReviewPreview/ReviewPreview';
import './ReviewList.css';
import { collection, getDocs} from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';


const ReviewList = ({ category }) => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const querySnapshot = await getDocs(collection(firestore, 'reviews'));
            const reviewsData = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setReviews(reviewsData);
          } catch (error) {
            console.log('Error fetching reviews:', error);
          }
        };

        fetchReviews();
    }, []);

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
                    <div dangerouslySetInnerHTML={{ __html: selectedReview.review }} />
                </div>
            )}
        </div>
    );
};

export default ReviewList;

