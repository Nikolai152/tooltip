import React from 'react';
import './App.css';
import { Table } from './Table';
import { getRows } from './Table/utils';

function App() {
  return (
    <div className="App">
      <div>
        <Table
          tooltipClassName="tooltip"
          rows={getRows('tooltip')}
        />
      </div>
    </div>
  );
}

export default App;
