import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import SideLeft from './components/side-left';

import Router from './routes.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="columns">
        <BrowserRouter>
          <SideLeft />
          <Router />
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;
