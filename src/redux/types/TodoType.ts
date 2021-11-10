import { ITodo } from '../reducers/TodoReducer';

export enum TodoType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CHANGE_COMPLETE = 'CHANGE_COMPLETE',
  COMPLETE_ALL = 'COMPLETE_ALL',
  CLEAR_COMPLETE = 'CLEAR_COMPLETE',
  EDIT_TODO = 'EDIT_TODO',
}

interface AddTodo {
  type: TodoType.ADD_TODO;
  payload: ITodo;
}
interface DeleteTodo {
  type: TodoType.DELETE_TODO;
  payload: string;
}
interface ChangeTodo {
  type: TodoType.CHANGE_COMPLETE;
  payload: string;
}
interface CompleteAll {
  type: TodoType.COMPLETE_ALL;
}
interface ClearComplete {
  type: TodoType.CLEAR_COMPLETE;
}
interface EditTodo {
  type: TodoType.EDIT_TODO;
  payload: { id: string; text: string };
}

export type TodoAction =
  | AddTodo
  | ClearComplete
  | CompleteAll
  | ChangeTodo
  | DeleteTodo
  | EditTodo;
