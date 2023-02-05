import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import increment from "./increment";
import App from './App'



let store = createStore(increment,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, 
    rootElement);
