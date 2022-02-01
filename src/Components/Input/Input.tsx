import { FC, useEffect, useState } from 'react';
import './Input.scss';

type InputProps = {
    setValue: (billValue: string) => void
    value: string
    label?: string
    placeholderText: string
}

const Input:FC<InputProps> = ({
  setValue, value, label, placeholderText,
}) => {
  const [focusColor, setFocusColor] = useState('a');

  useEffect(() => {
    if (value === '' || value === '0') {
      setFocusColor('input--start');
    } else if (parseInt(value, 10) < 0) {
      setFocusColor('input--negative');
    } else {
      setFocusColor('input--positive');
    }
  }, [value]);

  console.log(parseInt(value, 10));

  return (
    <div className="input__container">
      <div>{label}</div>
      <input
        className={`input ${focusColor}`}
        type="number"
        placeholder={placeholderText}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
