import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      console.log('HTTP request for ' + url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      setIsLoading(false);
      setFetchedData(data);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return [isLoading, fetchedData];
};
