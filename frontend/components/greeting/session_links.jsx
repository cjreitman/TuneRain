import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => { 

  return ( 
    <div>
      <div className="concert-image">
        <div>
          <Link to={"/"}><div className="cloud-image">
            
          </div>

          </Link> 
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }} ><h2 className="brand" >TUNERAIN</h2></Link> 
        </div>
        
        
        <nav className="login-signup">
          <Link to="/login"><button className="sign-in-button">Sign in</button></Link>
          <Link to="/signup"><button className="create-account-button" >Create account</button></Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <button className="creators-button" >For Creators</button> </Link>
        </nav>

      </div>
        <h2 className="front-hero"> What's next in music is first in TunRain</h2>
        <p className="front-sidekick">
        Upload your first track and begin your journey.<br></br>
        TuneRain gives you space to create, 
        find your fans, and connect with other artists.
        </p>
        <div className="button-wrapper"> <Link to="signup"><button className="upload-button">Start uploading today</button></Link> </div>
        
        <div className="header-search-box">
          <form className="header-search">
            <input className="header-search-bar" placeholder="Search for artists, bands, tracks, podcasts" type="search"></input>
            {/* <button className="header-search-submit" type="submit"></button>  */}
            or <button className="up-button">Upload your own</button>
          </form>
        </div>
    </div>
  )
}

export default sessionLinks;