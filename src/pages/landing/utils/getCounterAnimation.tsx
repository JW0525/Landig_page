import { useEffect, useState } from 'react';

const CounterAnimation = ({ totalCount }: { totalCount: number }) => {
  const [count, setCount] = useState(0);
  const duration = 5000; // in milliseconds
  const stepTime = Math.abs(Math.floor(duration / totalCount)) + 25;

  function addCommasToNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += Math.floor(totalCount / duration) * 50 + 3;
      setCount(counter);
      if (counter > totalCount) {
        setCount(totalCount);
        clearInterval(interval);
      }
    }, stepTime);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <>{addCommasToNumber(count)}</>;
};

export default CounterAnimation;
