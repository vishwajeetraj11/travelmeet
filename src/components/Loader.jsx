import React from 'react';

export const Loader = ({ fullScreen }) => (
  <div className={fullScreen ? 'h-screen w-screen flex items-center justify-center' : ''}>
    <div className={'spinner_3'} />
  </div>
);

