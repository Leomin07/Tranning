import React from 'react';

const CounterHook = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div>
      <span>Count: {count} </span>
      <button
        className="bg-gray-400 px-2 py-2 rounded-lg"
        onClick={() => setCount(count => count + 1)}
      >
        Increase
      </button>
      <button
        className="bg-gray-400 px-2 py-2 rounded-lg"
        onClick={() => setCount(count => count - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default CounterHook;
