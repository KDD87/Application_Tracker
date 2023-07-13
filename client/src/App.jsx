import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import HomeBar from './components/HomeBar.jsx'
import AddApplication from './components/AddApp.jsx'
// import Display from './components/DataDisplay.jsx'
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const date = new Date().toLocaleDateString("en-US", options);
// const fakeData = {
//   data: [{ _id: 1, companyName: 'costco', date: date }, { _id: 2, companyName: 'walmart', date: date }, { _id: 3, companyName: 'Yahoo', date: date }, { _id: 4, companyName: 'Apple', date: date }]
// }

const App = () => {
  const [data, setData] = useState([])


  const getAll = () => {
    axios.get('/applications')
      .then((data) => {
        setData(data)
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

  return (
    <Routes>
      <Route path='/' element={<HomeBar data={data} setData={setData} getAll={getAll}/>}/>
      <Route path='/AddApp' element={<AddApplication addOne={ addOne } />}/>
    </Routes>
  )
}

export default App
