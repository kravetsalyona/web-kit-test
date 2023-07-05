import { useState, useLayoutEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = () => {
    setCount(c => c + increment);
  };

  useLayoutEffect(() => {
    const id = setInterval(() => {
      onTick();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>
        Timer: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />

    </>
  );
}