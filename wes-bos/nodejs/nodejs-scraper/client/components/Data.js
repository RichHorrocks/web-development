import React, { useContext } from 'react';
import { ScrapeContext } from './ScrapeContext';
import { formatDistance } from 'date-fns';

const Data = () => {
  const dataContext = useContext(ScrapeContext);
  const { scrapes } = dataContext;

  return (
    <div>
      <h2>Your data:</h2>
      <ul>
        {scrapes.twitter.map(scrape => (
          <li key={scrape.date}>
            {scrape.count} -{' '}
            {formatDistance(new Date(scrape.date), new Date(), {
              addSuffix: true
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
