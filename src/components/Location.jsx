import React from 'react';
import locationMarker from '../assets/location-marker.svg';

export default function Location(props) {
  const {location, country, googleMapsUrl, startDate, endDate, description, imageUrl} = props.item;

  return (
    <article>
      <div>
        <header>
          <div>
            <img src={locationMarker} width="7px" height="10px" alt="" />
            <h2>{country}</h2>
            <a href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <h3>{location}</h3>
        </header>
        <p>{startDate} - {endDate}</p>
        <p>{description}</p>
      </div>
      <img src={imageUrl} alt={location} />
    </article>
  )
}
