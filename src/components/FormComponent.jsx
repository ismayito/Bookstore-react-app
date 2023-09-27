import './Component.css';
import { useState } from 'react';
import AddBookComponent from './AddBookComponent';

const FormComponent = () => {
  const [input, setInput] = useState('');
  const [author, setAuthor] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Book title" value={input} onChange={handleInput} className="bookTitle" />
          <input type="text" placeholder="author" value={author} onChange={handleAuthor} className="bookTitle" />
          <select name="books" id="books" className="selectCategory">
            <option value="category">category</option>
            <option value="fiction">fiction</option>
            <option value="adventure">adventure</option>
            <option value="entertainment">entertainment</option>
          </select>
          <AddBookComponent inputTitle={input} inputAuthor={author} inputTitleFunc={setInput} inputAuthorFunc={setAuthor} className="submitButton" />
        </form>
      </div>

    </>
  );
};

export default FormComponent;
