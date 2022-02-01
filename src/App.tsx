import './Reset.scss';
import './App.scss';
import { useState } from 'react';
import InfoPart from './Components/InfoPart/InfoPart';
import ResultsPart from './Components/ResultsPart/ResultsPart';
import Header from './Components/Header/Header';

const App = () => {
  const [tipAmountPerson, setTipAmountPerson] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [resetAll, setResetAll] = useState(false);

  return (
    <div className="app__container--big">
      <Header />
      <div className="app__container">
        <InfoPart
          setTipAmount={setTipAmountPerson}
          setTotal={setTotalPerson}
          resetState={resetAll}
        />
        <ResultsPart
          tipAmount={tipAmountPerson}
          total={totalPerson}
          activateReset={setResetAll}
          resetState={resetAll}
        />
      </div>
    </div>
  );
};

export default App;
