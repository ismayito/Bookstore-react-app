import './Component.css';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from './redux/books/booksSlice';

const RemoveBookComponent = ({ id }) => {
  const dispatch = useDispatch();
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/snHVDBK02Z7mOHfIcM9N/books';
  const handleDeleteBook = () => {
    axios.delete(`${url}/${id}`);
    dispatch(removeBooks(id));
  };

  return (
    <div>
      <button type="button" className="removeBtn" onClick={handleDeleteBook}>Remove</button>
    </div>
  );
};

RemoveBookComponent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveBookComponent;
