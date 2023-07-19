import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const AddApplication = ({ addOne, getAll }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [url, setUrl] = useState('');
  
  let monitorChange = {
    name: setName,
    description: setDescription,
    notes: setNotes,
    url: setUrl
  }
  
  const handleFormInput = (e) => {
    monitorChange[e.target.name](e.target.value)
    console.log(e.target.name, e.target.value)
  }

  const handleSubmitClick = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    let obj = {
      name: name,
      description: description,
      notes: notes,
      url: url,
      date: date
    }
    addOne(obj);
    getAll();
  }

  return (
    <>
    <div className="homebar">
      <Link to="/"><h2>App Tracker</h2></Link>
      <div>
        <Link to="/"><input type="button" className="save" value="Save" onClick={handleSubmitClick}></input></Link>
      </div>
    </div>
      <div className="formHome">
        <div className="form">
          <form>
            <label >Name</label>
            <input type="text" className="name" placeholder="Add Company Name" name="name" onChange={handleFormInput}></input>
            <label >Description</label>
            <textarea type="text" className="description" placeholder="Add Job Title and Description" name="description" onChange={handleFormInput}></textarea>
            <label>Notes</label>
            <textarea type="text" className="notes" placeholder="Add Notes" name="notes" onChange={handleFormInput}></textarea>
            <label>Link</label>
            <input type="text" className="url" placeholder="Add Company Website URL" name="url" onChange={handleFormInput}></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddApplication;