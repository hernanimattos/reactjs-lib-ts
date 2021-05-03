import React from 'react';
import logo from './logo.svg';
import './App.css';

import { VButton, VStepper } from '@monorepo/lib-components';

function App() {
  const steps = [{ label: 'teste' }, { label: 'teste1' }, { label: 'teste2' }];

  return (
    <div className='App'>
      <form action=''>
        <VStepper currentStep={1} showLabel={false} steps={steps} />
        <VButton btntype={'outlined'}>teste</VButton>
      </form>
    </div>
  );
}

export default App;
