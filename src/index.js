import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './App';
import reducer from './reducers';
import { addCoin } from './actions';
import configureStore from './store/index';

const store = configureStore(reducer ,{
	"coins" : [
		{"id":14, "name":"BitCoin", "coinAmount":100, "buyAvg":100000, "buyAmount":10000000, "evaluationAmount":1000000000},
		{"id":24, "name":"Ethereum", "coinAmount":1000, "buyAvg":100000, "buyAmount":100000000, "evaluationAmount":5000000000},
		{"id":34, "name":"LiteCoin", "coinAmount":2, "buyAvg":5000, "buyAmount":10000, "evaluationAmount":10000000}
	]
});
function listen(){
  console.log('=========================');
  console.log('index.js store change!!!');
  console.log(store.getState());
  console.log('-------------------------');
}

store.subscribe(listen);
// store.dispatch(addCoin('eth 1000000000$'));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  rootElement
);
