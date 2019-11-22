export const all = async () => {

  const res = await fetch('/api/cars');

  const cars = await res.json();

  return cars;
};

export const append = async car => {

  const res = await fetch('/api/cars',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

  return await res.json(); // returning the car
};
