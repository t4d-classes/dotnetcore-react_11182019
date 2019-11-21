import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';
import { UnorderedList } from './UnorderedList';

// Array.prototype.map = function(transformFn) {
//   const newArray = [];
//   const originalArray = this;
//   for (let x=0; x< originalArray.length; x++) {
//     newArray.push(transformFn(originalArray[x]));
//   }
//   return newArray;
// };

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, setColors ] = useState(initialColors.concat());

  const addColor = (colorData) => {
    setColors(colors.concat(colorData.color));
  };

  return <>
    <ToolHeader headerText="Color Tool" />
    <UnorderedList items={colors} />
    <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
  </>;

};
