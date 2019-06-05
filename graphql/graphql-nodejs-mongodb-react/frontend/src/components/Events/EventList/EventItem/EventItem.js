import React from 'react';

import './EventItem.css';

const eventItem = props => {
  return (
    <li key={props._id} className="events__list-item">
      <h1>{props.title}</h1>
      <h2>$99</h2>
    </li>
  );
};

export default eventItem;
