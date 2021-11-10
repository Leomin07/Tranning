import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  AddTodoAction,
  CompleteAllAction,
} from '../../redux/actions/TodoAction';
import { ITodo } from '../../redux/reducers/TodoReducer';

const AddTodo = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    let data: ITodo = {
      id: uuidv4(),
      text: text,
      complete: false,
    };
    dispatch(AddTodoAction(data));
    setText('');
  };
  return (
    <div className="px-3 border-b-2">
      <form
        className="flex align-middle relative"
        onSubmit={(event): void => addTodo(event)}
      >
        <BsChevronDown
          size="1.5em"
          className="my-auto"
          color="#E6E6E6"
          onClick={() => dispatch(CompleteAllAction())}
        />
        <input
          type="text"
          className="py-[18px] pl-[35px] pr-[10px] w-full focus:outline-none"
          placeholder="What needs to be done?"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTodo;
