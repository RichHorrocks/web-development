import React, { useContext } from 'react';
import { ScrapeContext } from './ScrapeContext';

import Table from './Table';
import Chart from './Chart';

const Data = () => {
  const { scrapes, getData } = useContext(ScrapeContext);

  return (
    <div>
      <button type="button" onClick={getData}>
        Refresh Data
      </button>
      <h2>Twitter</h2>
      <Chart scrapes={scrapes.twitter} />
      <Table scrapes={scrapes.twitter} />
      <h2>Instagram</h2>
      <Chart scrapes={scrapes.instagram} />
      <Table scrapes={scrapes.instagram} />
    </div>
  );
};

export default Data;
