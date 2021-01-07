import logo from './logo.svg';
import './App.css';
import { createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers';

import {moviesActions}  from './app/movies/duck'
const store=createStore(rootReducer,composeWithDevTools())
store.dispatch(moviesActions.add('How I met your mather'));


window.store=store;
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
