import './Component.css';
import PropTypes from 'prop-types';
import RemoveBookComponent from './RemoveBookComponent';

const Book = ({ itemId, title, author }) => (
  <>
    <p className="title">{title}</p>
    <p className="bookAuthor">{author}</p>
    <div className="buttons">
      <RemoveBookComponent id={itemId} />
      <button type="button" className="removeBtn">Comments</button>
      <button type="button" className="removeBtn">Edit</button>
    </div>
  </>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
