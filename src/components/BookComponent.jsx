import './Component.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/';
import Book from './Book';
import FormComponent from './FormComponent';

const BookComponent = () => {
  const [book, setBook] = useState([]);

  const { books } = useSelector((store) => store.books);

  useEffect(() => {
    setBook(books);
  }, [books]);
  return (
    <>
      <div className="bookStore">
        {book ? books?.map((book) => (
          <Book key={book.item_id} itemId={book.item_id} title={book.title} author={book.author} />
        )) : null}
      </div>
      <FormComponent />
    </>
  );
};

export default BookComponent;
