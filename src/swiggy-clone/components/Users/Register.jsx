import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Register({ close, openLogin }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="loginPage">
      <div className="loginSection">
        <div className="cancelButton" onClick={close}>
          <i className="bi bi-x"></i>
        </div>
        <div className="textSection">
          <p>Register</p>
          <h5>or</h5>
          <h5 className="link" onClick={openLogin}>Login</h5>
        </div>
        <form className="loginForm">
          <label>Phone Number</label>
          <input 
            type="phone" 
            placeholder="Enter your phone number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input 
            type="text" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  close: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
};
