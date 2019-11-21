import React from 'react';

export const UnorderedList = ({ items }) => {
  return <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
};