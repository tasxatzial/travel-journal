import React from 'react';
import Location from './Location.jsx';
import travelData from '../data/travel.js';

export default function App() {
  const data = travelData.map((item, id) => {
    return (
      <Location key={id} id={id} item={item}/>
    )
  });
  return (
    <>
      <header className="primary-header">
        <img src="assets/header-logo.svg" className='header-logo' width="24px" height="24px" alt="" />
        <h1 className="header-title">my travel journal.</h1>
      </header>
      <main>
        <div className="primary-container">{data}</div>
      </main>
    </>
  )
}
