import './Component.css';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <p className="title">{title}</p>
    <p className="bookAuthor">{author}</p>
    <div className="buttons">
      <button type="button" className="removeBtn">Remove</button>
      <button type="button" className="removeBtn">Comments</button>
      <button type="button" className="removeBtn">Edit</button>
    </div>
  </>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
