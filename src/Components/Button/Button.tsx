import { FC, useEffect, useState } from 'react';
import './Button.scss';

type ButtonProps = {
    text: number
    setValue: (value: number) => void
    pressedValue: number
}

const Button:FC<ButtonProps> = ({ text, setValue, pressedValue }) => {
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    if (pressedValue === text && pressedValue !== 0) {
      setActiveButton('active');
    } else {
      setActiveButton('');
    }
  });

  return (
    <button className={`button ${activeButton}`} onClick={() => setValue(text)}>
      {text}
      %
    </button>
  );
};

export default Button;
