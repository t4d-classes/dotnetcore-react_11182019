import React from 'react';

export const CarViewRow = ({ car, onEditCar }) => {

  const editCar = () => {
    onEditCar(car.id);
  };

  return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td>
      <button type="button" onClick={editCar}>Edit</button>
    </td>
  </tr>;

};