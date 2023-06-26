// @flow
import * as React from 'react';
export const GlobalSpinner = () => {
  return (
    <div className='spinner__overlay'>
      <div className='spinner__container'>
        <span className='spinner'></span>
      </div>
    </div>
  );
};
