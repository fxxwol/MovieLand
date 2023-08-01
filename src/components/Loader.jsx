import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
      }}
      wrapperClass="progress-bar-wrapper"
      borderColor="#22af3c"
      barColor="#131414"
    />
  );
};
