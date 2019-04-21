
import React from 'react';
import { Link } from 'react-router-dom';

const controlPanel = (props) => {
  return (
    <header className="control-panel">
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
          <Link to="/"><button className="right-panel-button">Upload</button></Link>
        </div>

        <div className="logout-button-box">
          <button className="panel-button" onClick={props.logout}>Log Out</button>
        </div>
    </header>

  )
};

export default controlPanel;



