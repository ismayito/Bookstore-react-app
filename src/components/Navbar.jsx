import './Component.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navContainer">
      <h1>Bookstore CMS</h1>
      <Link to="/" className="bookLink">BOOKS</Link>
      <Link to="/categories" className="categoryLink">CATEGORIES</Link>
    </div>
  </>
);

export default Navbar;
