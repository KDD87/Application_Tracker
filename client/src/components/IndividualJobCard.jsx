import React from 'react';
import { Link } from 'react-router-dom';

const IndividualJobCard = ({ data }) => {
console.log('inside IndividualJobData', typeof data.date);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let date = new Date(data.date).toLocaleDateString('en-US', options);
  return (
    <>
    <div className="homebar">
      <Link to="/"><h2>App Tracker</h2></Link>
      <div className="buttons_bar">
        <Link to="/AddApp"> <input type="button" className="addapp" value="Add Application" ></input></Link>
      </div>
    </div>
    <div className="individualJob">
      <div className="individualJobCard">
        <h3>{data.companyName}</h3>
        <p>{data.description}</p>
        <p>{data.notes}</p>
        <a href={data.url}>Company Link</a>
        <div>{date}</div>
      </div>
    </div>
  </>
  )
}

export default IndividualJobCard;