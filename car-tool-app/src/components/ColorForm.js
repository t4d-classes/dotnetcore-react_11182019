import React, { useState } from 'react';

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [
    colorForm,
    setColorForm
  ] = useState({
    color: '',
    hexcode: '',
  });

  const change = e => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });
  };

  const submitColor = () => {
    onSubmitColor(colorForm);
    setColorForm({
      color: '', hexcode: '',
    });
  };

  return <form>
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
    <button type="button" onClick={submitColor}>{buttonText}</button>
  </form>;
};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

