import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCounter,
  increaseCounter,
} from '../redux/actions/CounterAction';

interface RootState {
  count: number;
}
const CounterRedux = () => {
  const counter = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Count: {counter} </span>
      <button
        className="bg-gray-400 px-2 py-2 rounded-lg"
        onClick={() => dispatch(increaseCounter())}
      >
        Increase
      </button>
      <button
        className="bg-gray-400 px-2 py-2 rounded-lg"
        onClick={() => dispatch(decreaseCounter())}
      >
        Decrease
      </button>
    </div>
  );
};

export default CounterRedux;
