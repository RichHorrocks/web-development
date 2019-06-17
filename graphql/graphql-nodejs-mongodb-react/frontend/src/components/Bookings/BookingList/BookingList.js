import React from 'react';

const bookingList = props => (
  <ul>
    {props.bookings.map(booking => {
      return (
        <li key={booking._id}>
          <div>
            {booking.event.title} -
            {new Date(booking.createdAt).toLocaleString()}
          </div>
          <div>
            <button>Cancel</button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
