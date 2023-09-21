import './Component.css';
import { useState, useEffect } from 'react';

const BookComponent = () => {
  const [book, setBook] = useState([]);

  const bookData = [
    { title: ' The Hunger games', author: 'Suzanne Collins', id: 1 },
    { title: ' Dune', author: 'Frank Herbert', id: 2 },
    { title: ' Capital in the Twenty-First Century', author: 'Suzanne Collins', id: 3 },
  ];

  useEffect(() => {
    setBook(bookData);
  }, [book]);
  return (
    <>
      <div className="bookStore">
        {book ? bookData.map((book) => (
          <div key={book.id}>
            <p className="title">{book.title}</p>
            <p className="bookAuthor">{book.author}</p>
            <div className="buttons">
              <button type="button" className="removeBtn">Remove</button>
              <button type="button" className="removeBtn">Comments</button>
              <button type="button" className="removeBtn">Edit</button>
            </div>
          </div>
        )) : null}
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Book title" className="bookTitle" />
          <select name="books" id="books" className="selectCategory">
            <option value="category">category</option>
            <option value="fiction">fiction</option>
            <option value="adventure">adventure</option>
            <option value="entertainment">entertainment</option>
          </select>
          <button type="submit" className="submitButton">ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default BookComponent;
