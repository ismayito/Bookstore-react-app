import React from 'react';
import './Component.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBooks } from './redux/books/booksSlice';

const AddBookComponent = ({ input, inputFunc }) => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const itemId = currentDate.getTime();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooks({
      title: input,
      author: 'Mayito Ismail',
      item_id: itemId,
      category: 'fiction',
    }));
    inputFunc('');
  };
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>ADD BOOK</button>
    </div>
  );
};

AddBookComponent.propTypes = {
  input: PropTypes.string.isRequired,
  inputFunc: PropTypes.func.isRequired,
};

export default AddBookComponent;
