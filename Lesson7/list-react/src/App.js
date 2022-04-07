import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([
    {
      id: '0dac5f15-64b4-4ed3-a5d3-a3bfaef9f9a0',
      name: 'Otis Corwin',
      birthday: '2022-01-29T18:23:15.668Z',
      phone: '489.608.5411',
      zip: '98294-4188',
      city: 'Halvorsonborough',
      email: 'Haylie_Brakus30@hotmail.com',
      age: 'Salvador Nikolaus V'
    },
    {
      id: 'e34b78ca-e231-43a7-9fb9-f7073b606c69',
      name: 'Raymond',
      birthday: '2021-11-03T08:25:57.484Z',
      phone: '662-063-0262',
      zip: '54023-1355',
      city: 'Milfordville',
      email: 'Kylie.Morar63@gmail.com',
      age: 'Jeramie Bogan'
    },
    {
      id: 'f30efd89-ceda-44ee-b4b6-1dc7057ac1a4',
      name: 'Ludwig Haag',
      birthday: '2021-11-04T18:26:10.225Z',
      phone: '955-747-9260 x708',
      zip: '47342-3947',
      city: 'New Leila',
      email: 'Giovani21@hotmail.com',
      age: 'Katlyn Herzog Sr.'
    },
    {
      id: 'f30efd89-ceda-44ee-b4b6-1dc7057ac1b4',
      name: 'Tabitha Durgan',
      birthday: '2021-07-15T01:02:15.581Z',
      phone: '(326) 269-7330 x4291',
      zip: '86184',
      city: 'North Yeseniamouth',
      email: 'Jerome48@hotmail.com',
      age: 'Hannah Morar'
    },
    {
      id: 'f30efd89-ceda-44ee-b4b6-1dcg057ac1a4',
      name: 'Maia Eichmann',
      birthday: '2021-06-14T21:19:47.322Z',
      phone: '(331) 351-9091 x9086',
      zip: '73894',
      city: 'Danikaberg',
      email: 'Jeromy.Russel54@hotmail.com',
      age: 'Melvin Buckridge'
    },
    {
      id: 'f30efd89-ceda-54ee-b4b6-1dc7057ac1a4',
      name: 'Madyson Mitchell',
      birthday: '2021-05-02T22:48:16.428Z',
      phone: '(516) 822-0366 x53917',
      zip: '45516-0216',
      city: 'Sporerhaven',
      email: 'Rick.Hane@hotmail.com',
      age: 'Stacey Rohan'
    },
    {
      id: 'f30efd89-feda-44ee-b4b6-1dc7057ac1a4',
      name: 'Laurence Morar',
      birthday: '2021-10-10T13:24:08.177Z',
      phone: '592.902.8854',
      zip: '39734',
      city: 'Wellingtonfort',
      email: 'Ibrahim_Wehner94@yahoo.com',
      age: 'Macy Schroeder'
    }
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let parseValue = JSON.parse(inputValue);
    console.log(parseValue);
    let newId = uuidv4();
    console.log(newId);

    console.log({ ...parseValue, id: newId });
    const newUser = { ...parseValue, id: newId };

    setUsers([newUser, ...users]);
  };

  return (
    <div className='App'>
      <form onSubmit={handleFormSubmit}>
        <input type='text' onChange={handleInputChange} value={inputValue} />
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <p>{`Name: ${user.name}`}</p>
              <p>{`Phone: ${user.phone}`}</p>
              <p>{`Email: ${user.email}`}</p>
              <p>{`Age: ${user.age}`}</p>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
