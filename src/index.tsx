import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';
import theme from './components/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { createStore, compose, applyMiddleware } from 'redux';

// install redux dev tools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

 const storeTree = createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
 ));

ReactDOM.render(
  <React.Fragment>
    <Provider store={storeTree}>
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
