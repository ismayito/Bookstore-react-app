import React from 'react';
import './Component.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBooks } from './redux/books/booksSlice';

const AddBookComponent = ({
  inputTitle, inputTitleFunc, inputAuthor, inputAuthorFunc,
}) => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const itemId = currentDate.getTime();
  const handleSubmit = (e) => {
    e.preventDefault();
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
