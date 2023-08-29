import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomeBar from './components/HomeBar.jsx';
import AddApplication from './components/AddApp.jsx';
import IndividualJobCard from './components/IndividualJobCard.jsx'
// import Display from './components/DataDisplay.jsx'
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const date = new Date().toLocaleDateString("en-US", options);
// const fakeData = {
//   data: [{ _id: 1, companyName: 'costco', date: date }, { _id: 2, companyName: 'walmart', date: date }, { _id: 3, companyName: 'Yahoo', date: date }, { _id: 4, companyName: 'Apple', date: date }]
// }

const App = () => {
  const [data, setData] = useState([]);
  const [individualCardData, setIndividualCardData] = useState({});
 
  const getAll = () => {
    axios.get('/applications')
      .then((data) => {
        console.log('inside getaAll in App.jsx', data)
        setData(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAll()
  }, [])

  const addOne = (formData) => {
    axios.post('/application', { data: formData })
      .then((data) => {
        getAll()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const editText = (data) => {
    console.log('inside editText function in client', data)
    axios.put('/application', {data: data})
    .then((data) => {
      console.log('inside then block of editTExt in client', data)
      // getAll();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // const editNotes = (data) => {
  //   console.log('inside editNotes function in client', data)
  //   axios.put('/applications', {data: data})
  //   .then((data) => {
  //     console.log('inside then block of editNotes in client', data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  return (
    <Routes>
      <Route path='/' element={<HomeBar data={data} setData={setData} getAll={getAll} setIndividualCardData={setIndividualCardData} />}/>
      <Route path='/AddApp' element={<AddApplication addOne={ addOne } getAll={getAll} />}/>
      <Route path='/IndividualJobCard' element={<IndividualJobCard  data={individualCardData} getAll={getAll} editText={editText} />}/>
    </Routes>
  )
}

export default App
