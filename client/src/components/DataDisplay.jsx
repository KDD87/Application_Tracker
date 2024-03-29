import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// const date = new Date().toString();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const date = new Date().toLocaleDateString("en-US", options);
// console.log(date)
// const fakeData = {
//   data: [{ _id: 1, companyName: 'costco', date: date }, { _id: 2, companyName: 'walmart', date: date }, { _id: 3, companyName: 'Yahoo', date: date }, { _id: 4, companyName: 'Apple', date: date }]
// }

// eslint-disable-next-line react/prop-types
// const Display = ({ datas }) => {
const Display = ({ datas, getAll, setIndividualCardData }) => {

  const handleDeleteClick = (id) => {
    console.log('ID', id)
    axios.delete('/application', { data: {id: id} })
    .then(() => {
      getAll();
    })
    .catch((err) => err)
  }


  //this should be in the parent and then passed down
  const handleJobCardClick = (id) => {
    axios.get('application', { params: { data: id } })
    .then((data) => {
      console.log('inside handleJobCardClick then block', data.data)
      setIndividualCardData(data.data);
    })
    .catch((err) => err)
  }

  
  if (!datas || datas.length === 0) {
    return (
      <div className="display">
        You have not applied for any jobs yet. Start applying!!!!
      </div>
    )
  } else {
    // console.log('data', datas)
    return (
      <div className="displayParent">
        <div className="display">
          <ol>
            {
              datas.map((data) =>
                <li key={data._id} className="submitted_app">
                  <Link to="/IndividualJobCard" onClick={() => {handleJobCardClick(data._id)}}><div className="individual_job" >
                    <h3>{data.companyName}</h3>
                    <div>Date Applied To: {data.date}</div>
                  </div></Link>
                    <button className="deleteButton" onClick={() => {handleDeleteClick(data._id)} }>Delete</button>
                    <br></br>
                    <br></br>
                </li>
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Display;