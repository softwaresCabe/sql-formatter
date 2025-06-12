import React from 'react';
import SqlResultFormatter from './components/SqlResultFormatter';
import HuIdFormatter from './components/HuIdFormatter';
import SpacedItemsToLines from './components/SpacedItemsToLines';

function App() {
  return (
    <div>
      <SqlResultFormatter />
      <HuIdFormatter />
      <SpacedItemsToLines />
    </div>
  );
}


export default App;