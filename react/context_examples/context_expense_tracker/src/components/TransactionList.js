import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(tx => (
          <Transaction tx={tx} key={tx.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
