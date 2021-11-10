import { ITodo } from '../reducers/TodoReducer';
import { TodoType } from '../types/TodoType';

export const AddTodoAction = (data: ITodo) => ({
  type: TodoType.ADD_TODO,
  payload: data,
});

export const DeleteTodoAction = (id: string) => ({
  type: TodoType.DELETE_TODO,
  payload: id,
});

export const ChangeCompleteAction = (id: string) => ({
  type: TodoType.CHANGE_COMPLETE,
  payload: id,
});

export const CompleteAllAction = () => ({
  type: TodoType.COMPLETE_ALL,
});

export const ClearCompleteTodoAction = () => ({
  type: TodoType.CLEAR_COMPLETE,
});
export const EditTodoAction = (id: string, text: string) => ({
  type: TodoType.EDIT_TODO,
  payload: {
    id,
    text,
  },
});
