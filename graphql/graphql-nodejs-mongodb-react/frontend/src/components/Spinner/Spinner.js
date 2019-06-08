import React from 'react';

import './Spinner.css';

const spinner = () => {
  return (
    <div className="spinner">
      <div className="lds-ripple">
        <div />
      </div>
    </div>
  );
};

export default spinner;
