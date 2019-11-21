import React from 'react';

import { useForm } from '../hooks/useForm';

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [
    colorForm,
    change,
    resetColorForm,
  ] = useForm({
    color: '',
    hexcode: '',
  });

  const submitColor = () => {
    onSubmitColor(colorForm);
    resetColorForm();
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

