// Since Header is a component we need to capitalize the starting letter of the file
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';

function Header() {

  const [{basket}, dispatch] = useStateValue();

  //Dispatch is used to manipulate the info
  
  return (


    <div>
      
        <div className='Header'>
          
          <Link to='/'>
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />
          </Link>

          <div className='header_search'>
            <input className="header_searchInput" classtype="text" />
            <SearchIcon className="header_searchIcon"></SearchIcon>
          </div>

          <div className="header_nav">

            <div className='header_option'>
              <span className='header_optionLineOne'>
                Hello Guest
              </span>
              <span className='header_optionLineTwo'>
                Sign In
              </span>
            </div>

            <div className='header_option'>
              <span className='header_optionLineOne'>
                Returns
              </span>
              <span className='header_optionLineTwo'>
                & Orders
              </span>  
            </div>

            <div className='header_option'>
              <span className='header_optionLineOne'>
                Your
              </span>
              <span className='header_optionLineTwo'>
                Prime
              </span>
            </div>

            <Link to='/checkout'>
              <div className="header_optionBasket">
                <ShoppingBasketIcon></ShoppingBasketIcon>
                <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
              </div>
            </Link>

          </div>



        </div>
      
    </div>
  )
}

export default Header
