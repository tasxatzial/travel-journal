import React from 'react';
import Location from './Location.jsx';
import travelData from '../data/travel.js';

export default function App() {
  const data = travelData.map((item, id) => {
    return (
      <Location key={id} item={item}/>
    )
  });
  return (
    <>{data}</>
  )
}
