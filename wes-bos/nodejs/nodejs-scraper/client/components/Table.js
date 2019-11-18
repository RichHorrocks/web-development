import React from 'react';
import { formatDistance } from 'date-fns';

const Table = ({ scrapes }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Count</td>
          <td>Time</td>
        </tr>
      </thead>
      <tbody>
        {scrapes.map(scrape => (
          <tr key={scrape.date}>
            <td> {scrape.count} </td>
            <td>
              {' '}
              {formatDistance(new Date(scrape.date), new Date(), {
                addSuffix: true
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
