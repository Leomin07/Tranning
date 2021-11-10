import { INCREASE, DECREASE } from '../types/CounterType';

export const increaseCounter = () => {
  return {
    type: INCREASE,
  };
};
export const decreaseCounter = () => {
  return {
    type: DECREASE,
  };
};
