import React, { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { ImRadioUnchecked } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import {
  ChangeCompleteAction,
  DeleteTodoAction,
  EditTodoAction,
} from '../../redux/actions/TodoAction';
import { ITodo } from '../../redux/reducers/TodoReducer';

interface Todos {
  todo: ITodo;
}

const Todo: React.FC<Todos> = ({ todo }) => {
  const { id, text, complete } = todo;
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState(text);
  const [hidden, setHidden] = useState(false);
  const handlerEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    dispatch(EditTodoAction(id, editValue));
    setHidden(false);
  };

  return (
    <div>
      <div key={id} className="flex px-3 py-3 group align-middle border-b-2">
        <div className="relative pr-7">
          {!complete ? (
            <ImRadioUnchecked
              className="absolute top-[3px] left-[1px]"
              size="1.5em"
              onClick={() => dispatch(ChangeCompleteAction(id))}
            />
          ) : (
            <BiCheckCircle
              className="absolute top-[3px] left-[1px]"
              size="1.5em"
              onClick={() => dispatch(ChangeCompleteAction(id))}
            />
          )}
        </div>
        <div className="focus:outline-none w-full pr-[50px] pl-[30px] my-auto">
          {hidden ? (
            <form onSubmit={e => handlerEdit(e, id)}>
              <input
                type="text"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                onBlur={() => setHidden(false)}
              />
            </form>
          ) : (
            <span
              className={complete ? 'line-through' : ''}
              onClick={() => {
                setHidden(!hidden);
                setEditValue(text);
              }}
            >
              {text}
            </span>
          )}
        </div>
        <div className="my-auto hidden group-hover:block">
          <FaTimes
            size="1.5em"
            color="#cc9a9a"
            onClick={() => dispatch(DeleteTodoAction(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
