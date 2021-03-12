import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilValue} from 'recoil';

import testAtom from './store/atoms/testAtom';
import TestButton from './components/atoms/TestButton'

import './App.css';

const TestRecoil = () => {
  return <p>{useRecoilValue(testAtom)}</p>;
}

const App = () => {

  return (
    <RecoilRoot>
      <div className="App">
        <h1> Soundtrace - Web </h1>
        <TestRecoil />
        <TestButton text='Hello Button' />
      </div>
    </RecoilRoot>
  );
};

export default App;
