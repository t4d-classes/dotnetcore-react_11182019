import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { all as allCars } from '../services/carsData';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ headerText }) => {

  const [ cars, setCars ] = useState([]);
  const [ editCarId, setEditCarId ] = useState(-1);

  useEffect(() => {

    allCars().then(cars => setCars(cars));

  }, [setCars]);

  const addCar = (car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
  };

  const saveCar = (car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1)
  };

  const cancelCar = () => setEditCarId(-1);

  return <>
    <ToolHeader headerText={headerText} />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={setEditCarId}
      onSaveCar={saveCar} onCancelCar={cancelCar} />
    <CarForm buttonText="Add Car"
      onSubmitCar={addCar} />
  </>;

};

CarTool.defaultProps = {
  // headerText: 'Car Tool',
};

CarTool.propTypes = {
  headerText: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
};