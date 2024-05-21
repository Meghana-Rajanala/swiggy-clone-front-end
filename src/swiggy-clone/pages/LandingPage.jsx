import { useState } from 'react';
import Navbar from '../components/Navbar';
import Items from '../components/Items';
import Chains from '../components/Chains';
import Login from '../components/Users/Login';
import Register from '../components/Users/Register';
import Footer from '../components/Users/Footer';
import ChainsofTop from '../components/ChainsOfTop';

function LandingPage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [selectedFirmId, setSelectedFirmId] = useState(null);
  


    const loginHandler = () => {
        setShowLogin(true);
        setShowRegister(false);
      
        setSelectedFirmId(null);
    };

    const registerHandler = () => {
        setShowRegister(true);
        setShowLogin(false);
       
        setSelectedFirmId(null);
    };

    const closeLogin = () => {
        setShowLogin(false);
     
    };

    const closeRegister = () => {
        setShowRegister(false);
        
    };

    const selectFirm = (firmId,) => {
        setSelectedFirmId(firmId);
       
       
    };

    return (
        <>
            <Navbar loginHandler={loginHandler} registerHandler={registerHandler} />
            {showLogin && <Login close={closeLogin} openRegister={registerHandler} />}
            {showRegister && <Register close={closeRegister} openLogin={loginHandler} />}
            <div className="landingSection">
                <Items />
                <ChainsofTop />
                <Chains selectFirm={selectFirm}  />
               
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;
