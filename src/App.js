import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = [
  {
    'id':1,
    'imagae': 'https://palceimg.com/64/64/1',
    'name': 'lee',
    'birthday' : '111111',
    'gender' : 'male',
    'job' : 'student'
  },
  {
    'id':2,
    'imagae': 'https://palceimg.com/64/64/2',
    'name': 'kim',
    'birthday' : '222222',
    'gender' : 'male',
    'job' : 'student'
    },
  {
    'id':3,
    'imagae': 'https://palceimg.com/64/64/3',
    'name': 'park',
    'birthday' : '333333',
    'gender' : 'male',
    'job' : 'student'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.birthday}
                job={c.job}
              />
            )
          })}
      </div>
    );
  }
}

export default App;
