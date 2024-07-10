import React from 'react';
import locationMarker from '/assets/location-marker.svg';

export default function Location(props) {
  const {location, country, googleMapsUrl, startDate, endDate, description, imageUrl} = props.item;
  const id = React.useId();

  return (
    <article className="location-root-container" aria-labelledby={id}>
      <div className="location-details-container">
        <header>
          <div className="location-url-container">
            <img src={locationMarker} className="location-marker" width="7px" height="10px" alt="" />
            <h3 className="location-country">{country}</h3>
            <a href={googleMapsUrl} className="location-google-url">View on Google Maps</a>
          </div>
          <h2 id={id} className="location-name">{location}</h2>
        </header>
        <p className="location-duration">{`${startDate} - ${endDate}`}</p>
        <p className="location-description">{description}</p>
      </div>
      <div className="location-image-container">
        <img src={imageUrl} alt={location} className="location-image" />
      </div>
    </article>
  )
}
