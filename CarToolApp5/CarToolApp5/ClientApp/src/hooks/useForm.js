import { useState } from 'react';

export const useForm = (initialForm) => {

  const [ form, setForm ] = useState({ ...initialForm });

  const change = ({ target: { name, value, type }}) => {

    setForm({
      ...form,
      [ name ]: type === 'number'
        ? Number(value) : value,
    });

  };

  const resetForm = () => setForm({ ...initialForm });

  return [ form, change, resetForm ];
};