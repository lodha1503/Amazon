import React from 'react'
import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './Home/Home'
import Checkout from './CheckOut/Checkout'




function App() {
  return (
    <Router>
      
      <div className="app">
        <Routes>
          
          <Route path='/checkout' element={[<Header/>,<Checkout/>]} />
          <Route path='/' element={[<Header/>,<Home/>]} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
