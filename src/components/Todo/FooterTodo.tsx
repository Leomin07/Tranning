import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearCompleteTodoAction } from '../../redux/actions/TodoAction';
import { ITodo } from '../../redux/reducers/TodoReducer';

interface Todo {
  todo: ITodo[];
  handlerFilter: (item: string) => void;
}

const FooterTodo: React.FC<Todo> = ({ todo, handlerFilter }) => {
  const handlerFilterChange = (item: string) => {
    handlerFilter(item);
  };
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-3 py-3">
      <div className="length">
        {todo.filter((value: ITodo) => value.complete === false).length} item
        left
      </div>
      <div>
        {['ALL', 'ACTIVE', 'COMPLETE'].map((value: string, index: number) => (
          <span
            className="px-2 cursor-pointer"
            key={index}
            onClick={() => handlerFilterChange(value)}
          >
            {value}
          </span>
        ))}
      </div>
      <div
        className={
          todo.filter((value: ITodo) => value.complete === true).length === 0
            ? 'invisible'
            : 'visible cursor-pointer'
        }
      >
        <span onClick={() => dispatch(ClearCompleteTodoAction())}>
          Clear completed
        </span>
      </div>
    </div>
  );
};

export default FooterTodo;
