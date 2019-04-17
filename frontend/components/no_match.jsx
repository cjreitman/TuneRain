import React from 'react';
import { Link } from 'react-router-dom';

const noMatch = () => {
  return (<div>
    <h1>404 </h1>
    <h4>(That page ain't here, yo)</h4>
    <Link to="/">Back to the known universe</Link>
    </div>)

}

export default noMatch;