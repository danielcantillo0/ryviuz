// ReviewEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ReviewEditor.css';

const ReviewEditor = () => {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
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
    setImage(e.target.files[0]);
  };

  const handleContentChange = (value) => {
    setContent(value);
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
    const formData = new FormData();
    formData.append('title', title);
    formData.append('score', score);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      // Replace this with your actual API call
      await fakeApiCall(formData);
      setSuccessMessage('Review submitted successfully!');
      setTitle('');
      setScore('');
      setImage(null);
      setContent('');
    } catch (error) {
      setErrorMessage('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fakeApiCall = (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Success'), 2000);
    });
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
            <input type="number" value={score} onChange={handleScoreChange} min="0" max="10" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
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


