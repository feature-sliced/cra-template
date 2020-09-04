import React from 'react';
import { Button } from "shared/components";
import logo from './logo.svg';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/app/index.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.notion.so/Feature-Driven-Development-dfe306d664ae4780bcf999ccdd15e532"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn FDD
        </a>
        <Button>Click</Button>
      </header>
    </div>
  );
}

export default App;
