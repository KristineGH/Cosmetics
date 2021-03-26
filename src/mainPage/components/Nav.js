import "../../styles.css";
import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../Pics/user.png";
import exit from "../../Pics/exit.png"; 

function Nav(props) {
  const { email, signUpEmail, logout } = props;

  if (email  || signUpEmail ) {
    return (
      <nav className="nav">
      <Link to="/" id="logo"></Link>
      <Link to="/new">
        <p>New</p>
      </Link>
      <Link to="/lips">
        <p>Lips</p>
      </Link>
      <Link to="/face">
        <p>Face</p>
      </Link>
      <Link to="/eyes">
        <p>Eyes</p>
      </Link> 
      <Link to="/brushes">
        <p>Brushes</p>
      </Link>
      <Link to="/skin">
        <p>Skin</p>
      </Link>
      <Link to="/bestSellers">
        <p>BEST-SELLERS</p>
      </Link>
      <Link to="/brands">
        <p>Brands</p>
      </Link>
      <Link to="/login">
        <img src={userIcon} className="userIcon" />
      </Link>

        <p id="loginName">
          USER {email} {signUpEmail}
        </p>
        <img src={exit} className="userIcon" onClick={logout}/>
    </nav>
    );
  }


  return (
    <nav className="nav">
      <Link to="/" id="logo"></Link>
      <Link to="/new">
        <p>New</p>
      </Link>
      <Link to="/lips">
        <p>Lips</p>
      </Link>
      <Link to="/face">
        <p>Face</p>
      </Link>
      <Link to="/eyes">
        <p>Eyes</p>
      </Link>
      <Link to="/brushes">
        <p>Brushes</p>
      </Link>
      <Link to="/skin">
        <p>Skin</p>
      </Link>
      <Link to="/bestSellers">
        <p>BEST-SELLERS</p>
      </Link>
      <Link to="/brands">
        <p>Brands</p>
      </Link>
      <Link to="/login">
        <img src={userIcon} className="userIcon" />
      </Link>
    </nav>
  );

  
}
export default Nav;