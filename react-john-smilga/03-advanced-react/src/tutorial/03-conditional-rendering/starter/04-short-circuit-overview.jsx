import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState('Anurag');
  // return <h2>The value is {first || second}</h2>;
  return <h2>The value is {first && second}</h2>;
};
export default ShortCircuitOverview;
