import React from 'react';

import { useForm } from '../hooks/useForm';

export const CarEditRow = ({ car, onSaveCar, onCancelCar }) => {

  const [ carForm, change ] = useForm({ ...car });

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" id="edit-make-input" name="make"
          value={carForm.make} onChange={change} /></td>
    <td><input type="text" id="edit-model-input" name="model"
          value={carForm.model} onChange={change} /></td>
    <td><input type="number" id="edit-year-input" name="year"
          value={carForm.year} onChange={change} /></td>
    <td><input type="text" id="edit-color-input" name="color"
          value={carForm.color} onChange={change} /></td>
    <td><input type="number" id="edit-price-input" name="price"
          value={carForm.price} onChange={change} /></td>
    <td>
      <button type="button" onClick={() => null}>Save</button>
      <button type="button" onClick={() => null}>Cancel</button>
    </td>
  </tr>;

};