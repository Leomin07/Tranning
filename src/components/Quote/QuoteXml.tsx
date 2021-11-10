import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuoteFetchAction } from '../../redux/actions/QuoteAction';
import { IQuote } from '../../redux/reducers/QuoteReducer';
import { RootState } from '../../redux/reducers/rootReducer';
import { colors } from './color';

const QuoteWithFetch = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state.quotes.quotes;
  });
  const [color, setColor] = useState<string>('#16a085');

  useEffect(() => {
    setTimeout(() => {
      dispatch(getQuoteFetchAction());
    }, 1000);
  }, [dispatch]);

  const randomQuote = () => {
    dispatch(getQuoteFetchAction());
    setTimeout(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 500);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: '100vh',
        transition: 'all .5s ease-out',
      }}
    >
      <div className="bg-white max-w-[500px] px-4 py-4 rounded-sm mx-auto m-auto inset-x-0 text-center">
        {data.map((x: IQuote) => (
          <div key={x.quote}>
            <span style={{ color: color, transition: 'all .5s ease-out' }}>
              <strong> Quote: </strong>
              {x.quote}
            </span>
            <br />
            <span style={{ color: color, transition: 'all .5s ease-out' }}>
              <strong>Character: </strong>
              {x.character}
            </span>
          </div>
        ))}
        <button
          onClick={() => randomQuote()}
          style={{ backgroundColor: color }}
          className="bg-white px-3 py-2 rounded-sm text-white"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteWithFetch;
