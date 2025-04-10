import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { maincontext } from "../App";




const Header =() => {
    const {cart,setSearchVar,searchHandler} =useContext(maincontext);

    return(
        <>
<div className="navbar">
  <h1>My Store</h1>

  <form className="search-form">
    <input type="text" className="search-input" />
    <button className="search-button">Search</button>
  </form>

  <div className="nav-links">
    <NavLink to="/">Products</NavLink>
    <NavLink to="/cart">Cart (0)</NavLink>
  </div>
</div>

<style>
* Base styles (desktop-first) */
{`
.navbar {
  background-color: black;
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.navbar h1 {
  font-size: 32px;
  margin: 0;
}

.search-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.search-input {
  width: 250px;
  height: 40px;
  padding: 0 8px;
  border-radius: 4px;
  border: none;
}

.search-button {
  background-color: orange;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: darkorange;
}

.nav-links {
  display: flex;
  gap: 24px;
}

/* Tablet and below */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }

  .search-form {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .search-input {
    width: 100%;
  }

  .search-button {
    width: 100%;
  }

  .nav-links {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }
}

/* Mobile devices */
@media (max-width: 480px) {
  .navbar h1 {
    font-size: 24px;
  }

  .nav-links {
    flex-direction: column;
    gap: 8px;
  }

  .search-form {
    gap: 8px;
  }
}
`}
</style>


        </>
    )
}

export default Header;