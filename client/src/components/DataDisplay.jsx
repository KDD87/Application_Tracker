import React from 'react';
// const date = new Date().toString();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date().toLocaleDateString("en-US", options);
console.log(date)
const fakeData = {
  data: [{ _id: 1, companyName: 'costco', date: date }, { _id: 2, companyName: 'walmart', date: date }, { _id: 3, companyName: 'Yahoo', date: date }, { _id: 4, companyName: 'Apple', date: date }]
}

// eslint-disable-next-line react/prop-types
// const Display = ({ datas }) => {
const Display = () => {
  if (!fakeData.data || fakeData.data.length === 0) {
    return (
      <div className="display">
        You have not applied for any jobs yet. Start applying!!!!
      </div>
    )
  } else {
    console.log('date', fakeData.data)
    return (
      <div className="display">
        <ol>
          {
            fakeData.data.map((data) =>
              <li key={data._id} className="submitted_app">
                <div className="individual_job">
                  <h3>{data.companyName}</h3>
                  <div>Date Applied To: {data.date}</div>
                </div>
              </li>
            )
          }
        </ol>
      </div>
    )
  }
}

export default Display;