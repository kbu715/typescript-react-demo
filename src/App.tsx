import React, { useState } from 'react';
import { Form, Input } from './Input';
import Number from './Number';

interface IState {
  counter : number;
  name: string;
}

const App = () => {

  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const onChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  const onFormSubmit = (event:React.FormEvent): void => {
    event.preventDefault();
  }


  const add = ():void => {
    setCounter(prev => prev + 1);
  }

    return (
    <div>
      <Form onFormSubmit={onFormSubmit}>
        <Input value={name} onChange={onChange} />
      </Form>
      <Number count={counter} /> <button onClick={add}>Add</button>
      <div><small>If count is bigger than 10, text color will be red</small></div>
    </div>
    );

}

export default App;
