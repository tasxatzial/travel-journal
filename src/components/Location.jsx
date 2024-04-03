import React from 'react';
import locationMarker from '../assets/location-marker.svg';

export default function Location(props) {
  const {location, country, googleMapsUrl, startDate, endDate, description, imageUrl} = props.item;

  return (
    <article className='location-root-container'>
      <div>
        <header>
          <div className='location-url-container'>
            <img src={locationMarker} className='location-marker' width="7px" height="10px" alt="" />
            <h2 className='location-country'>{country}</h2>
            <a href={googleMapsUrl} className='location-google-url'>View on Google Maps</a>
          </div>
          <h3 className='location-name'>{location}</h3>
        </header>
        <p className='location-duration'>{startDate} - {endDate}</p>
        <p className='location-description'>{description}</p>
      </div>
      <div className='location-image-container'>
        <img src={imageUrl} alt={location} className='location-image' />
      </div>
    </article>
  )
}
