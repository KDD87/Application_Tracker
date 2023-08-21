import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IndividualJobCard = ({ data, getAll, editText, editNotes }) => {
  const [descritpion, setDescription] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    setDescription(data.description);
    setNotes(data.notes);
  }, [])

  const handleAppTrackerClick = () => {
    getAll();
  }

  const saveDescription = (e) => {
    let text = document.getElementById('description');
    let obj = {};
    obj.id = data._id;
    obj.text = text.innerText;
    editText(obj);
    text.setAttribute('contentEditable', false)
  }
  const editDescription = () => {
    let text = document.getElementById('description');
    text.setAttribute('contentEditable', true)
  }

  const saveNotes = (e) => {
    let text = document.getElementById('note');
    let obj = {};
    obj.id = data._id;
    obj.text = text.innerText;
    editNotes(obj);
    text.setAttribute('contentEditable', false)
  }

  const editNote = () => {
    let text = document.getElementById('note');
    text.setAttribute('contentEditable', true)
  }

    return (
      <>
      <div className="homebar">
        <Link to="/" onClick={() => {handleAppTrackerClick()}}><h2>App Tracker</h2></Link>
        <div className="buttons_bar">
          <Link to="/AddApp"> <input type="button" className="addapp" value="Add Application" ></input></Link>
        </div>
      </div>
      <div className="individualJob">
        <div className="individualJobCard">
          <h3>{data.companyName}</h3>
          <p id="description" contentEditable="false" ><strong>Position Description:</strong> {descritpion}</p>
          <button onClick={editDescription}>Edit</button>
          <button onClick={saveDescription}>Save</button>
          <p id="note" contentEditable="false" ><strong>About Company:</strong> {notes}</p>
          <button onClick={editNote}>Edit</button>
          <button onClick={saveNotes}>Save</button>
          <br></br>
          <a href={data.url}>Company Link</a>
          <div>{data.date}</div>
        </div>
      </div>
    </>
    )
}

export default IndividualJobCard;