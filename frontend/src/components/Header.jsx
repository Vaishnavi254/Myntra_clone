import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const [filteredItems, setFilteredItems] = useState([]);
  const items = useSelector((state) => state.items);

  // Filter functions
  const handleMen = () => {
   
    setFilteredItems(items.filter(item => item.purchaser === 'men'));
  };

  const handleWomen = () => {
    
    setFilteredItems(items.filter(item => item.purchaser === 'women'));
  };
  
  const handleKids = () => {
    
    setFilteredItems(items.filter(item => item.purchaser === 'kids'));
  };
  
  const handleHome = () => {
    
    setFilteredItems(items.filter(item => item.purchaser === 'home'));
  };
  
  const handleBeauty = () => {
    
    setFilteredItems(items.filter(item => item.purchaser === 'beauty'));
  };
  
  
  const handleStudio = () => {
   
    setFilteredItems(items.filter(item => item.purchaser === 'studio'));
  };

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/filtered-items?category=men" onClick={handleMen}>Men</Link>
        <Link to="/filtered-items?category=women" onClick={handleWomen}>Women</Link>
        <Link to="/filtered-items?category=kids" onClick={handleKids}>Kids</Link>
        <Link to="/filtered-items?category=home" onClick={handleHome}>Home & Living</Link>
        <Link to="/filtered-items?category=beauty" onClick={handleBeauty}>Beauty</Link>
        <Link to="/filtered-items?category=studio" onClick={handleStudio}>
          Studio <sup>New</sup>
        </Link>
      </nav>
      <div className="search_bar">
        <IoIosSearch />
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonOutline />
          <span className="action_name">Profile</span>
        </div>
        <div className="action_container">
          <FaRegHeart />
          <span className="action_name">Wishlist</span>
        </div>
        <Link className="action_container" to="/bag">
          <IoBagHandleOutline />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
