import './Component.css';
import { useState, useEffect } from 'react';
import Book from './Book';
import FormComponent from './FormComponent';

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
          <Book key={book.id} title={book.title} author={book.author} />
        )) : null}
      </div>
      <FormComponent />
    </>
  );
};

export default BookComponent;
