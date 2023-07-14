import React from 'react'
import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
    return (
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          right: '50%',
        }}
        wrapperClass="progress-bar-wrapper"
        borderColor="#22af3c"
        barColor="#131414"
      />
    );
}
