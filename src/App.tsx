
import './App.css';
import {useState, useEffect} from 'react';
import { List } from './components/List';
import { Form } from './components/Form';
import { Sub } from './types'


const INITIAL_STATE =  [{
  nick: "Uuzii",
  subMonths: 4,
  avatar: "https://i.pravatar.cc/150?u=Uuzii",
  description: "Hace de moderador a veces"
},
{
  nick: "Ark",
  subMonths: 8,
  avatar: "https://i.pravatar.cc/150?u=Ark"
}];

const App = () => {

  const [subs, setSubs] = useState<Array<Sub>>([]);

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub) : void =>{
    setSubs( subs => [...subs, newSub])
  }

  return (
    <div className="App">
      <h1>Subscribers</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
