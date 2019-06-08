import React from 'react';

import './EventItem.css';

const eventItem = props => {
  return (
    <li key={props._id} className="events__list-item">
      <div>
        <h1>{props.title}</h1>
        <h2>
          £{props.price} - {new Date(props.date).toLocaleDateString()}
        </h2>
      </div>
      <div>
        {props.creatorId !== props.userId ? (
          <button
            className="btn"
            onClick={props.onDetail.bind(this, props.eventId)}
          >
            View Details
          </button>
        ) : (
          <p>You're the owner of this event</p>
        )}
      </div>
    </li>
  );
};

export default eventItem;
