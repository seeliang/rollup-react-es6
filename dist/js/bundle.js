import React from 'react';
import ReactDOM from 'react-dom';

const Part = React.createElement("p", null, " part");

function App() {
  return React.createElement("div", {
    className: "App"
  }, React.createElement(Part, null));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
