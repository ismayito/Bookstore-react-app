import './Component.css';
import PropTypes from 'prop-types';
import RemoveBookComponent from './RemoveBookComponent';

const Book = ({
  itemId, title, author, category,
}) => (
  <>
    <div className="bookContainer">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="bookAuthor">{author}</p>
      <div className="buttons">
        <RemoveBookComponent id={itemId} />
        <span className="divider" />
        <button type="button" className="removeBtn">Comments</button>
        <span className="divider" />
        <button type="button" className="removeBtn">Edit</button>
      </div>
    </div>
  </>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
