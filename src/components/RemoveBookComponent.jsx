import './Component.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from './redux/books/booksSlice';

const RemoveBookComponent = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" className="removeBtn" onClick={() => dispatch(removeBooks(id))}>Remove</button>
    </div>
  );
};

RemoveBookComponent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveBookComponent;
