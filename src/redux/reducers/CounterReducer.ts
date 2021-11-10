import { INCREASE, DECREASE } from '../types/CounterType';

interface IAction {
  type: string;
}

export const counterReducer = (state = 0, action: IAction) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
