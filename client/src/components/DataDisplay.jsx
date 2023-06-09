import React from 'react';

const Display = ({ datas }) => {
  if (!datas.data) {
    return (
      <div>
        You have not applied for any jobs yet. Start applying!!!!
      </div>
    )
  } else {
    return (
      <div>
        {
          datas.data.map((data) => {
            return <div key={data._id} className="submitted_app">
                <div>
                  <h3>{data.companyName}</h3>
                  <div>{data.date}</div>
                </div>
                <div>
                  {data.description}
                </div>
                <div>
                  {data.notes}
                </div>
                <div><a href={data.url}>URL LINK</a></div>
              </div>
          })
        }
      </div>
    )
  }
}

export default Display;