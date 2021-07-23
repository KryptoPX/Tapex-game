import React, { FC, useEffect, useState } from 'react'
import { Game } from '../../controllers/Game'
import { FindPatterns } from '../../controllers/PatternFinder'
import { Block, BlockType } from '../../types/Block'
import { Coordinate } from '../../types/Coordinate'
import { BlockView } from './BlockView'

interface ITableView {
    history: Block[][][]
}

export const TableHistory: FC<ITableView> = ({ history }) => {
    let [patterns, setPatterns] = useState(new Array<Array<Coordinate>>())
    let [page, setPage] = useState(0);
    let [table, setTable] = useState(new Array<Array<Block>>())

    useEffect(()=> {
        let newTable = [...history[page]]
        FindPatterns(newTable).forEach(t => t.forEach(t => newTable[t.y][t.x].iluminate = true))
        setTable(newTable)
    }, [page])

    const changePage = (nextPage: boolean) => {
        if (nextPage) {
            if (history.length-1 > page) setPage(page + 1);
        } else {
            if (0 < page) setPage(page - 1);
        }
    }
    
    return (
        <>
            <table>
                <tbody>
                    {table.map((y, c_y) =>
                        <tr key={c_y}>
                            {y.map((x, c_x) => <BlockView key={c_y + "-" + c_x} block={x} />)}
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="HistoryBTNS">
                <button onClick={() => changePage(false)}>{"<--"}</button>
                <button>{page}</button>
                <button onClick={() => changePage(true)}>{"-->"}</button>
            </div>
        </>
    )
}