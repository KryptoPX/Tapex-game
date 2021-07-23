import React, { useEffect, useState } from 'react'
import './App.scss'
import { TableView } from './Components/Game_Mode/TableView';
import { TableHistory } from './Components/History_Mode/TableHistory';
import { Game } from './controllers/Game';
import { Block } from './types/Block';

function App() {
  let [table, setTable] = useState(Game.GenTable());
  let [history, setHisotry] = useState(new Array<Array<Array<Block>>>())
  let [showHistory, setShowHistory] = useState(false);

  const resetGame = () => {
    setShowHistory(false)
    setHisotry(new Array<Array<Array<Block>>>())
    setTable(Game.GenTable());
  }

  let TableRender;

  if (showHistory) {
    TableRender = <TableHistory history={history} />
  } else {
    TableRender = <TableView table={table} setTable={setTable} history={history} setHistory={setHisotry} />
  }

  return (
    <>
      <div className="Game">
        <div className="Table">{TableRender}</div>
        <div>
          <button onClick={resetGame}>New Table</button>
          <button onClick={() => setShowHistory(!showHistory)}>ShowHistory</button>
        </div>
      </div>
    </>
  )
}

export default App