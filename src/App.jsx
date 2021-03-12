import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilValue} from 'recoil';

import serverFetch from './api/axios';
import testAtom from './store/atoms/testAtom';

import './App.css';

const App = () => {

  return (
    <RecoilRoot>
      <div className="App">
        <h1> Soundtrace - Web </h1>
        <TestRecoil />
      </div>
    </RecoilRoot>
  );
};

const TestRecoil = () => {
  return <p>{useRecoilValue(testAtom)}</p>;
}

export default App;
