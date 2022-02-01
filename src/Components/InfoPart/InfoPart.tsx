import { FC, useEffect, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './InfoPart.scss';

const tipPercentages: number[] = [5, 10, 15, 25, 50];

type InfoPartProps = {
    setTotal: (value: number) => void;
    setTipAmount: (value: number) => void;
    resetState: boolean
}

const InfoPart:FC<InfoPartProps> = ({ setTotal, setTipAmount, resetState }) => {
  const [billValue, setBillValue] = useState('');
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTipPercentage, setCustomTipPercentage] = useState('');
  const [personAmount, setPersonAmount] = useState('');

  const tipHandler = (value:number) => {
    setTipPercentage(value);
    setCustomTipPercentage('');
  };

  useEffect(() => {
    const tipAmount = ((parseInt(billValue, 10) / 100) * tipPercentage).toFixed(2);
    const TotalPrice = parseFloat(billValue) + parseFloat(tipAmount);
    const personPrice = TotalPrice / parseInt(personAmount, 10);
    const personTip = parseFloat(tipAmount) / parseInt(personAmount, 10);

    if (customTipPercentage !== '') {
      setTipPercentage(parseInt(customTipPercentage, 10));
    }

    setTotal(personPrice);
    setTipAmount(personTip);
  });

  useEffect(() => {
    setBillValue('');
    setTipPercentage(0);
    setCustomTipPercentage('');
    setPersonAmount('');
  }, [resetState]);

  return (
    <div className="infoPart__container">
      <Input setValue={setBillValue} value={billValue} label="Bill" placeholderText="0" />

      <div>
        <p className="infoPart__button--header">Select tip %</p>
        <div className="infoPart__button--container">
          {tipPercentages.map((value) => (
            <Button text={value} setValue={() => tipHandler(value)} key={value} pressedValue={tipPercentage} />
          ))}

          <Input setValue={setCustomTipPercentage} value={customTipPercentage} placeholderText="Custom" />

        </div>
      </div>

      <Input setValue={setPersonAmount} value={personAmount} label="Number of people" placeholderText="0" />
    </div>
  );
};

export default InfoPart;
