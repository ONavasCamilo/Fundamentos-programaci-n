import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import { Sub } from "./types";
import Form from "./components/Form";

const initialState = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  }
]

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  useEffect(() => {
    setSubs(initialState)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App">
    <h1>midu subs</h1>
    <List subs={subs}/>
    <Form onNewSub={handleNewSub}/>
  </div>
  )
}

export default App;