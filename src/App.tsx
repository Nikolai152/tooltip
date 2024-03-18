import './App.css';

import { Rows } from './Table/mock/Rows/Rows';
import { Table } from './Table/Tooltip/Tooltip.stories';

function App() {
  return (
    <div className="App">
      <div>
        <Table tooltipClassName="tooltip" rows={Rows('tooltip')} />
      </div>
    </div>
  );
}

export default App;
