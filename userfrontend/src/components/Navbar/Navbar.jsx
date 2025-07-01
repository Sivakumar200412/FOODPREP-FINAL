import { useState, useContext, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ showLogin, setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  // 🌙 Theme Toggle State
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/" className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>
          Home
        </Link>
        <a href="#food-display" className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>
          Menu
        </a>
        <a href="#footer" className={menu === 'contact-us' ? 'active' : ''} onClick={() => setMenu('contact-us')}>
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <div className="dot-basket">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() !== 0 ? 'dot' : ''}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <Link to="/myorders">
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </Link>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                      <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

        {/* 🌙 Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
