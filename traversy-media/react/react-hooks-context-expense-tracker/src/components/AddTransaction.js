import React from 'react';

const AddTransaction = () => {
  return (
    <>
      <h3>Add New Transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input type="text" placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </>
  );
};

export default AddTransaction;
