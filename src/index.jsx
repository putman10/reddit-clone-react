import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { AppContainer } from "react-hot-loader";
import { HashRouter } from 'react-router-dom';
import { createStore } from "redux";
// import ticketListReducer from './reducers/ticket-list-reducer';
import { Provider } from "react-redux";

// const store = createStore(ticketListReducer);

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider>
       <Component />
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}