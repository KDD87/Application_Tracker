import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import HomeBar from "./components/HomeBar.jsx";
import AddApplication from "./components/AddApp.jsx";
import Display from "./components/DataDisplay.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const getAll = () => {
    axios.get('/applications')
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAll();
  }, [])

  const addOne = (formData) => {
    axios.post('/application', {data: formData})
    .then((data) => {
      getAll();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if (page === 0) {
    return (
      <div>
        <HomeBar redirect={setPage}/>
        <Display datas={data}/>
      </div>
    )
  }
  if (page === 1) {
    return (
      <div>
        <HomeBar redirect={setPage}/>
        <AddApplication addOne={addOne}/>
      </div>
    )
  }
}

const domNode = document.getElementById("app");
const root = createRoot(domNode);
root.render(<App/>);