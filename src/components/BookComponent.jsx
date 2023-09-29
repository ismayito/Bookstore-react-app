import './Component.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import Book from './Book';
import FormComponent from './FormComponent';
import { fetchBooks } from './redux/books/booksSlice';
import OvalComponent from './OvalComponent';
import ChapterComponent from './ChapterComponent';

const BookComponent = () => {
  const { books, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookList = Object.keys(books);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <div>
        {bookList.map((id) => (
          <div className="bookStore" key={id}>
            {books[id].map((item) => (
              <div key={item.title}>
                <Book
                  itemId={id}
                  title={item.title}
                  author={item.author}
                  category={item.category}
                />
              </div>
            ))}
            <OvalComponent />
            <ChapterComponent />
          </div>
        ))}
      </div>
      <FormComponent />
    </>
  );
};

export default BookComponent;
