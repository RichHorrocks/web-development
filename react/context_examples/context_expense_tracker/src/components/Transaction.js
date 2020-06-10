import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ tx }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = tx.amount < 0 ? '-' : '+';
  return (
    <li className={tx.amount < 0 ? 'minus' : 'plus'}>
      {tx.text}{' '}
      <span>
        {sign}${Math.abs(tx.amount)}
      </span>
      <button onClick={() => deleteTransaction(tx.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
