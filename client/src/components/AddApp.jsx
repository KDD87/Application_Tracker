import React, { useState } from 'react';

const AddApplication = ({addOne}) => {
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

  const handleSubmitClick = ()=> {
    let obj = {
      name: name,
      description: description,
      notes: notes,
      url: url,
      date: new Date()
    }
    addOne(obj);
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" className="name" name="name" onChange={handleFormInput}></input>
        <label>Description</label>
        <input type="text" className="description" name="description" onChange={handleFormInput}></input>
        <label>Notes</label>
        <input type="text" className="notes" name="notes" onChange={handleFormInput}></input>
        <label>Link</label>
        <input type="text" className="url" name="url" onChange={handleFormInput}></input>
      </form>
      <div>
        <input type="button" className="save" value="Save" onClick={handleSubmitClick}></input>
      </div>
    </div>
  )
}

export default AddApplication;