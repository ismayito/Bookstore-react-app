import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
