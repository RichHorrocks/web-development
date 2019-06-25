import React from 'react';
import { Bar as BarChart } from 'react-chartjs';

const BOOKINGS_BUCKETS = {
  Cheap: { min: 0, max: 50 },
  Normal: { min: 50, max: 100 },
  Expensive: { min: 100, max: 100000 }
};

const bookingsChart = props => {
  const chartData = { labels: [], datasets: [] };
  let values = [];

  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price > BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    values.push(filteredBookingsCount);
    chartData.labels.push(bucket);
    chartData.datasets.push({
      data: values
    });
    values = [...values];
    values[values.length - 1] = 0;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <BarChart data={chartData} />
    </div>
  );
};

export default bookingsChart;
