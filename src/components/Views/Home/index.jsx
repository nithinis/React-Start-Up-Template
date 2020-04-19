import React, {useState, useEffect} from 'react';
import GlobalNavDrawer from 'components/GlobalNavDrawer';
import GlobalAppBar from 'components/GlobalAppBar';
import Paper from '@material-ui/core/Paper';


import logo from 'logo.svg';
import 'App.css';

export default function Home(){
  const [isNavOpen, setIsNavOpen] = useState(true);
  const toggleMenu=()=> {
    setIsNavOpen(!isNavOpen);
  }

  const handleNavClose=()=> {
    setIsNavOpen(false);
  }

  return (
    <React.Fragment>
      <GlobalAppBar onClick={toggleMenu} />
      <GlobalNavDrawer isOpen={isNavOpen} onChange={handleNavClose} />

      <Paper className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Paper>
    </React.Fragment>
  )
}
