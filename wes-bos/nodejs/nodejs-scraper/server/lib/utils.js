// const uniqueCount = scrapes => {
//   return scrapes.reduce((previous, item) => {
//     if (!previous.find(findItem => findItem.count === item.count)) {
//       previous.push(item);
//     }
//     return previous;
//   }, []);
// };

const uniqueCount = scrapes => {
  return scrapes.filter((item, i, arr) => {
    if (i === 0) return true;
    const lastItem = arr[i - 1];
    return !(item.count === lastItem.count);
  });
};

export default uniqueCount;
