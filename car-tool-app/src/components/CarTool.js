import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars, headerText }) => {

  const [ cars, setCars ] = useState(initialCars.concat());

  const addCar = (car) => {

    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
  };

  return <>
    <ToolHeader headerText={headerText} />
    <CarTable cars={cars} />
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