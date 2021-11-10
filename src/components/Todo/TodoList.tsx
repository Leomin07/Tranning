import React from 'react';
import { ITodo } from '../../redux/reducers/TodoReducer';
import Todo from './Todo';

interface Todos {
  todo: ITodo[];
}

const TodoList: React.FC<Todos> = ({ todo }) => {
  return (
    <div>
      {todo.map((value: ITodo, index: number) => (
        <Todo key={index} todo={value} />
      ))}
    </div>
  );
};

export default TodoList;
