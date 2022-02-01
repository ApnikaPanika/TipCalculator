import { FC } from 'react';
import './ResultsPart.scss';

type ResultsPartProps = {
    tipAmount: number
    total: number
    activateReset: (value:boolean) => void
    resetState:boolean
}

const ResultsPart:FC<ResultsPartProps> = ({
  tipAmount, total, activateReset, resetState,
}) => {
  const clickHandler = () => {
    activateReset(!resetState);
  };

  return (
    <div className="resultsPart__container">
      <div className="resultsPart__total--container">
        <div className="resultsPart__pricing--container">
          <div>
            <p className="resultsPart__header--text">Tip amount</p>
            <p className="resultsPart__person--text">/ person</p>
          </div>
          <div className="resultsPart__money">
            $
            {tipAmount.toFixed(2) === 'NaN' ? 0.00 : tipAmount.toFixed(2)}
          </div>
        </div>

        <div className="resultsPart__pricing--container">
          <div>
            <p className="resultsPart__header--text">Total</p>
            <p className="resultsPart__person--text">/ person</p>
          </div>
          <div className="resultsPart__money">
            $
            {total.toFixed(2) === 'NaN' ? 0.00 : total.toFixed(2)}
          </div>
        </div>
      </div>
      <div>
        <button className="resultsPart__reset" onClick={clickHandler}>Reset</button>
      </div>
    </div>
  );
};

export default ResultsPart;
