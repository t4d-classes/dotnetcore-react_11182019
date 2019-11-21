import React, { useState } from 'react';
import { ToolHeader } from './ToolHeader';

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

  const [
    colorForm /* model data, state data */,
    setColorForm /* function to update the model data, re-render */
  ] = useState({
    color: '',
    hexcode: '',
  } /* initial value of the color state */);

  const change = e => {
    // updates the state to use the new value/reference
    // triggers a re-render
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

    // colorForm[e.target.name] = e.target.value;
    // setColorForm(colorForm);
  };

  const addColor = () => {
    setColors(colors.concat(colorForm.color));
    // setColors([ ...colors, colorForm.color ]);

    setColorForm({
      color: '', hexcode: '',
    });
  };

  return <>
    <ToolHeader headerText="Color Tool" />
    <ul>
      {colors.map(color => <li key={color}>{color}</li>)}
    </ul>
    <form>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={colorForm.color} onChange={change} />
      </div>
      <div>
        <label htmlFor="hexcode-input">HexCode:</label>
        <input type="text" id="hexcode-input" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </div>
      <button type="button" onClick={addColor}>Add Color</button>
    </form>
  </>;

};
