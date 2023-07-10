import React from 'react'

const HomeBar = ({ redirect }) => {
  const handleHomePageClick = () => {
    redirect(0)
  }
  const handleAddAppClick = () => {
    redirect(1)
  }

  return (
    <div className="homebar">
      <h2 className="homepage" onClick={handleHomePageClick}>App Tracker</h2>
      <div className="buttons_bar">
        <input type="button" className="addapp" value="Add Application" onClick={handleAddAppClick}></input>
      </div>
    </div>
  )
}

export default HomeBar