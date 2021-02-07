import React from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';  
import {createStore} from 'redux';

import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code 

const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); /* code change */
 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import manageBand from './reducers/manageBand';

// // we wrap store in a function for testing purposes
// export const configureStore = () => {
//   return createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// };

// let store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <App store={store}/>
//   </Provider>,
//   document.getElementById('root')
// );