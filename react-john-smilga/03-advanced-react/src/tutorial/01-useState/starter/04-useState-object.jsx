import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });
  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('read books');

  const displayPerson = () => {
    setPerson({
      name: 'john',
      age: 69,
      hobby: 'use vim',
    });
    // setName('john');
    // setAge(69);
    // setHobby('using vim');
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      {/* <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3> */}
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
    </>
  );
};

export default UseStateObject;
