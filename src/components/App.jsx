import React from 'react';
import Location from './Location.jsx';
import travelData from '../data/travel.js';

export default function App() {
  const data = travelData.map(item => {
    return (
      <Location key={item.id} item={item}/>
    )
  });
  return (
    <>{data}</>
  )
}
