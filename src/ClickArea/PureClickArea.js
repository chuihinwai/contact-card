import React from 'react';
import './PureClickArea.css';
import { identity } from 'ramda';

export const PureClickArea = ({ isTouched = false, onClick = identity, children }) => {
  return <div className={'ClickArea ' + (isTouched ? 'touched' : '')} onClick={onClick}>
    {children}
  </div>;
};
