
import React from 'react';
import { Link } from 'react-router-dom';

const controlPanel = (props) => {
  return (
    <div className="control-panel">
        <section className="panel-box">
          <div className="cloud-box">
            <div className="panel-cloud"></div>
          </div>

          <div className="panel-buttons">
            <Link to="/"><button className="panel-button">Home</button></Link>
            <Link to="/"><button className="panel-button">Stream</button></Link>
            <Link to="/"><button className="panel-button">Library</button></Link>
          </div>

          <div className="header-search-box1">
            <form className="panel-search1">
              <input className="panel-search-bar1" placeholder="Search" type="search"></input>
            </form>
          </div>

          <div className="right-button-box" >

            <Link to="/"><button className="right-panel-button">Upgrade</button></Link>
            <Link to={`/wavecloud/${props.currentUser.id}/uploadsong`}><button className="right-panel-button">Upload</button></Link>

            <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">{props.currentUser.username}</button>
                <div id="myDropdown" className="dropdown-content">
                  <a href="#">Profile</a>
                  <a href="#">Likes</a>
                  <a href="#">Stations</a>
                  <a href="#">Who to follow</a>
                  <a href="#">Try Pro</a>
                  <a href="#">Tracks</a>
                </div>
            </div>

            {/* <div>
              <Link to="/"><button className="right-panel-button"></button></Link>
              <Link to="/"><button className="right-panel-button"></button></Link>
            </div> */}
            
          </div>

          <div className="logout-button-box">
            <button className="panel-button" onClick={props.logout}>Log Out</button>
          </div>
        </section>
    </div>
  )
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

export default controlPanel;



