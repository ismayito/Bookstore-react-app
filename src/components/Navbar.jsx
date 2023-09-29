import './Component.css';
import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <>
    <nav className="navContainer">
      <div className="linksContainer">
        <section className="nav">
          <h1 className="header">Bookstore CMS</h1>
          <Link to="/" className="bookLink">BOOKS</Link>
          <Link to="/categories" className="categoryLink">CATEGORIES</Link>
        </section>
        <BsFillPersonFill size={80} className="profile" />
      </div>
    </nav>
  </>
);

export default Navbar;
