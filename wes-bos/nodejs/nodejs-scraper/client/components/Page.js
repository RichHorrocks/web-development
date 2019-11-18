import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

const useScrapes = () => {
  const [scrapes, setScrapes] = useState({ twitter: [], instagram: [] });

  const getData = async () => {
    console.log('Mounting or Updating');
    const res = await fetch('http://localhost:2093/data');
    const data = await res.json();
    console.log(data);
    setScrapes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { scrapes, getData };
};

export const Page = ({ children }) => {
  const hookInfo = useScrapes();
  return (
    <ScrapeProvider value={hookInfo}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
};

export default Page;
