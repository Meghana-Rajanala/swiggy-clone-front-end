import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ loginHandler }) {
  return (
    <div className="navbar-section">
      <div>
        <Link className="navbar-icon" to="/">
          <img src="swiggy-logo.png" alt="Swiggy Logo" height={66} width={90} />
        </Link>
      </div>
      <div className="rightNavbar">
        <ul>
          <li>
            <Link to="/">
              <i className="bi bi-building"></i>Restaurant Corporate
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="bi bi-search"></i> Search
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="bi bi-tags"></i> Offers
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="bi bi-question-circle"></i> Help
            </Link>
          </li>
          <li onClick={loginHandler}>
            <i className="bi bi-box-arrow-right"></i> Sign In
          </li>
          <li>
            <Link to="/">
              <i className="bi bi-bag-fill"></i> Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  loginHandler: PropTypes.func.isRequired,
 
};

export default Navbar;
