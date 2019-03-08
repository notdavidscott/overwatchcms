import React from 'react';
import loadingspinner2 from './loadingspinner2.gif';

export default () => {
  return (
    <div>
      <img
        src={loadingspinner2}
        style={{ width: '10em', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};
