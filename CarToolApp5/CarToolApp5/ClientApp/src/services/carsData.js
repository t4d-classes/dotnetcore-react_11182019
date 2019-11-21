

export const all = async () => {

  const res = await fetch('/api/cars');

  const cars = await res.json();

  return cars;
};