import React from 'react';
import loadingspinner from './loadingspinner.gif';

export default () => {
  return (
    <div>
      <img
        src={loadingspinner}
        style={{ width: '4em', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};
