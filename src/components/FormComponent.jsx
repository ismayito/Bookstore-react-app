import './Component.css';

const FormComponent = () => (
  <>
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

export default FormComponent;
