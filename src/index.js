import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { configureStore } from "./_store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();


function getRandomTime() {
 return  Math.random() * (5000 - 1000) + 1000;
}

function addRandomTask () {
  const date = new Date();
  store.dispatch({
    type: 'ADD_TASK', 
    payload: {
      id: new Date().getUTCMilliseconds(),
      name: `${date.getDate()}/${date.getMonth()}/${date.getYear()} ${date.getHours()}:${date.getSeconds()}`,
      listId: 1001,
    }
  })

  setTimeout(addRandomTask, getRandomTime())

}

setTimeout(addRandomTask, getRandomTime());
