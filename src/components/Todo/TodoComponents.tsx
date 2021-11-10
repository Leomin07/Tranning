import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { ITodo } from '../../redux/reducers/TodoReducer';
import AddTodo from './AddTodo';
import FooterTodo from './FooterTodo';
import TodoList from './TodoList';

const Todo = () => {
  const { todo } = useSelector((state: RootState) => state.todo);
  const [filterValue, setFilterValue] = useState<string>('All');

  const filterTodo = (todo: ITodo[], filterValue: string) => {
    return todo.filter(x => {
      if (filterValue === 'COMPLETE') {
        return x.complete === true;
      } else if (filterValue === 'ACTIVE') {
        return x.complete === false;
      } else return todo;
    });
  };

  const handlerFilter = (value: string) => {
    setFilterValue(value);
  };

  return (
    <div className="shadow-lg bg-white w-[550px] mx-auto my-auto">
      <AddTodo />
      <TodoList todo={filterTodo(todo, filterValue)} />
      <FooterTodo todo={todo} handlerFilter={handlerFilter} />
    </div>
  );
};
export default Todo;
