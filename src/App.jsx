import React from 'react';

import PrintOptions from './components/print-options/print-options';
import PrintSelector from './components/print-selector/print-selector';

const App = () => {
  return (
    <>
      <PrintSelector />
      <PrintOptions />
    </>
  );
}

export default App;
