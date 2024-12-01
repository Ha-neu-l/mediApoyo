import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Healthcare-Chatbot</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/annotation">Chatbot</Link></li>
        <li><Link to="/Signin">Sign in</Link></li>
        <li className='nav-contact'><Link to="/login">Sign up</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
