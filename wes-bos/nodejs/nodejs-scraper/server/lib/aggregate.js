const isInLast6Hours = timestamp => {
  const sixHoursAgo = 1000 * 60 * 60 * 6;
  return Date.now() - timestamp < sixHoursAgo;
};

const aggregate = scrapes => {
  const aggregateScrapes = scrapes
    .reverse()
    .map(scrape => {
      const date = new Date(scrape.date);
      const optionalHour = isInLast6Hours(scrape.date)
        ? `-${date.getHours()}`
        : '';
      console.log(date);
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}${optionalHour}`;

      return {
        key,
        ...scrape
      };
    })
    .reduce((accumulator, currentScrape) => {
      // Check to see if this key is already in the accumulator.
      // If not, add it to the new array.
      if (!accumulator.find(scrape => scrape.key === currentScrape.key)) {
        return [...accumulator, currentScrape];
      }
      return accumulator;
    }, []);

  return aggregateScrapes;
};

export default aggregate;
