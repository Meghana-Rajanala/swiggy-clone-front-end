import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Login({ close, openRegister }) {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="loginPage">
      <div className="loginSection">
        <div className="cancelButton" onClick={close}>
          <i className="bi bi-x"></i>
        </div>
        <div className="textSection">
          <p>Login</p>
          <h5>or</h5>
          <h5 className="link" onClick={openRegister}>Create an account</h5>
        </div>
        <form className="loginForm">
          <label>Phone Number</label>
          <input 
            type="text" 
            placeholder="Enter your phone number" 
            value={phone} 
            onChange={handlePhoneChange} 
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  close: PropTypes.func.isRequired,
  openRegister: PropTypes.func.isRequired,
};
