import LandingPage from "./swiggy-clone/pages/LandingPage";
import Products from './swiggy-clone/components/Users/Products';

import './App.css';
import { Routes, Route } from 'react-router-dom';



function App(){
  
  return(
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/product/:firmId/get-products" element={<Products />} /> {/* Define route for /products */}
    </Routes>
    </>
  
    )
}

export default App;