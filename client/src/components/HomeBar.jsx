import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataDisplay from './DataDisplay.jsx';
// eslint-disable-next-line react/prop-types
const HomeBar = ({ data, setData, getAll, setIndividualCardData }) => {

  // const [inputData, setInputData] = useState(data)
  const [search, setSearch] = useState('');
  
  let monitorChange = {
    search: setSearch
  }
  
  const handleSearch = (e) => {
    monitorChange[e.target.name](e.target.value);
    // axios.get('/search', {params: {data: search }})
    // .then((data) => {
    //   setData(data);
    // })
    console.log(e.target.name, e.target.value);
  }

  return (
    <>
      <div className="homebar">
        <h2>App Tracker</h2>
        <div>
          <button>Search</button>
          <input type="text" className="search" name="search" placeholder="Search" onChange={handleSearch}></input>
        </div>
        <div className="buttons_bar">
          <Link to="/AddApp"> <input type="button" className="addapp" value="Add Application" ></input></Link>
        </div>
      </div>
      <DataDisplay datas={data} getAll={getAll} setIndividualCardData={setIndividualCardData}/>
    </>
  )
};

export default HomeBar;
