import React from "react";
import './App.css';
import { Table } from './Tooltip/mockAndHooks/mock/Table/Table'
import { GetRows } from './Tooltip/mockAndHooks/mock/GetRows/GetRows'

function App() {
  return (
    <div className="App">
      <div>
      <Table tooltipClassName="tooltip" rows={GetRows('tooltip')} />
      </div>
    </div>
  );
}

export default App;
