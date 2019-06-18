import React from 'react';

const bookingList = props => (
  <ul>
    {props.bookings.map(booking => {
      return (
        <li className="bookings__item" key={booking._id}>
          <div clasName="bookings__item-data">
            {booking.event.title} -
            {new Date(booking.createdAt).toLocaleString()}
          </div>
          <div className="bookings__item-actions">
            <button>Cancel</button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
