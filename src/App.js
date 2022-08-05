import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux"
import { actionCreators } from './store/index'

function App() {
  const accout = useSelector((state) => state.accout);
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
      <h1>{accout}</h1>
      <button onClick={() => depositMoney(1000)}> Deposit </button>
      <button onClick={() => withdrawMoney(1000)}> Withdraw </button>
    </div>
  );
}

export default App;
