
import './App.css';
import {useState, useEffect} from 'react';
import { List } from './components/List';


interface Sub{
  nick: String
  avatar: string
  subMonths: number
  description?: string
}

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

  return (
    <div className="App">
      <h1>Subscribers</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;
