import React, { useState } from 'react'
import './App.scss'
import { TableView } from './Components/TableView';
import { Game } from './controllers/Game';

function App() {
  let [table, setTable] = useState(Game.GenTable());

  return (
    <>
      <TableView table={table} setTable={setTable}  />
      <button onClick={() => setTable(Game.GenTable())}>New Table</button>
    </>
  )
}

export default App