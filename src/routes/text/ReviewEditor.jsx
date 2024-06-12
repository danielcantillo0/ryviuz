// ReviewEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ReviewEditor.css';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';
import DOMPurify from 'dompurify';

const ReviewEditor = () => {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const validateForm = () => {
    if (!title || !score || !content) {
      setErrorMessage('All fields are required except for the image.');
      return false;
    }
    if (score < 0 || score > 10) {
      setErrorMessage('Score must be between 0 and 10.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    const sanitizedContent = DOMPurify.sanitize(content);

    try {
      await addDoc(collection(firestore, 'reviews'), {
        title,
        score: parseFloat(score),
        review: sanitizedContent,
        image: imageUrl, 
        category,
        createdAt: new Date()
      });
      setSuccessMessage('Review submitted successfully!');
      setTitle('');
      setScore('');
      setImageUrl('');
      setContent('');
      setCategory('');
    } catch (error) {
      console.log(error)
      setErrorMessage('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="review-editor">
      <h2 className="review-editor-title">Post Your Review</h2>
      <form className="review-editor-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Score:
            <input type="number" value={score} onChange={handleScoreChange} min="0" max="10" step="0.1" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            ImageUrl:
            <input type="text" value={imageUrl} onChange={handleImageChange} />
          </label>
        </div>
        <div className="form-group">
        <label>
            Category:
            <select value={category} onChange={handleCategoryChange} required>
              <option value="">Select a category</option>
              <option value="Movies">Movies</option>
              <option value="Books">Books</option>
              <option value="Anime">Anime</option>
              <option value="TV Series">TV Series</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <ReactQuill value={content} onChange={handleContentChange} />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Post Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewEditor;


