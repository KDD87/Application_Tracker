import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataDisplay from './DataDisplay.jsx';
// eslint-disable-next-line react/prop-types
const HomeBar = ({ data, setData, getAll, setIndividualCardData }) => {

  const handleSearch = (e) => {
    axios.get('/applications')
    .then((data) => {
      const searchedItems = data.data.filter((name) => {
        return name.companyName.toLowerCase().includes(e.target.value.toLowerCase());
      })
      const obj = {}
      setData(searchedItems);
    })
    .catch((err) => err)
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
