import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = ['black', 'grey', 'blue', 'green', 'red', 'orange'];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'red', price: 35000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2017, color: 'blue', price: 100000 },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList}  headerText="Car Tool" />
  </>,
  document.querySelector('#root'),
);
