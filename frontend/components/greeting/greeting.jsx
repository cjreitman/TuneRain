import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (

    <div>

    <div className="concert-image">
    <div>
       <Link to={"/"}><div className="cloud-image">
        
      </div>
      </Link> 
      <h2 className="brand" >WaveCloud</h2>
    </div>
    
    
    <nav className="login-signup">
      <Link to="/login"><button className="sign-in-button">Sign in</button></Link>
      <Link to="/signup"><button className="create-account-button" >Create account</button></Link>
      <Link to="/"> <button className="creators-button" >For Creators</button> </Link>
    </nav>

  </div>
    <h2 className="front-hero"> What's next in music is first in WaveCloud</h2>
    <p className="front-sidekick">
    Upload your first track and begin your journey.<br></br>
    WaveCloud gives you space to create, 
    find your fans, and connect with other artists.
    </p>
    <div className="button-wrapper"><button className="upload-button">Start uploading now</button></div>
    
    <div className="header-search-box">
      <form className="header-search">
        <input className="header-search-bar" placeholder="Search for artists, bands, tracks, podcasts" type="search"></input>
        <button className="header-search-submit" type="submit">Search</button> or <button className="up-button">Upload your own</button>
      </form>
    </div>
  
  </div>

  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome to WaveCloud, {currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;