import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

const useScrapes = () => {
  const [scrapes, setScrapes] = useState({ twitter: [], instgram: [] });

  useEffect(() => {
    const getData = async () => {
      console.log('Mounting or Updating');
      const res = await fetch('http://localhost:2093/data');
      const data = await res.json();
      console.log(data);
      setScrapes(data);
    };

    getData();
  }, []);

  return scrapes;
};

export const Page = ({ children }) => {
  const scrapes = useScrapes();
  console.log('SCRAPES: ', scrapes);
  return (
    <ScrapeProvider value={{ scrapes }}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
};

export default Page;
