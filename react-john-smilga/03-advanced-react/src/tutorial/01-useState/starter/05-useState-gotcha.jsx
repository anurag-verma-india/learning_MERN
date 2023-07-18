import { useState } from 'react';

const UseStateGotcha = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setNum((currentValue) => {
        const newValue = currentValue + 1;
        console.log(newValue);
        return newValue;
      });
    }, 3000);
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleClick} className="btn" type="button">
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
