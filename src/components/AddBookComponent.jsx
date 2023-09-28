import React from 'react';
import axios from 'axios';
import './Component.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBooks } from './redux/books/booksSlice';

const AddBookComponent = ({
  inputTitle, inputTitleFunc, inputAuthor, inputAuthorFunc,
}) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/snHVDBK02Z7mOHfIcM9N/books';
  const dispatch = useDispatch();
  const currentDate = new Date();
  const itemId = currentDate.getTime();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, {
      item_id: itemId,
      title: inputTitle,
      author: inputAuthor,
      category: 'fiction',
    });
    dispatch(addBooks({
      title: inputTitle,
      author: inputAuthor,
      item_id: itemId,
      category: 'fiction',
    }));
    inputTitleFunc('');
    inputAuthorFunc('');
  };
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>ADD BOOK</button>
    </div>
  );
};

AddBookComponent.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  inputTitleFunc: PropTypes.func.isRequired,
  inputAuthor: PropTypes.string.isRequired,
  inputAuthorFunc: PropTypes.func.isRequired,
};

export default AddBookComponent;
