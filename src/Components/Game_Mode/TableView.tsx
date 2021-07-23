import React, { FC, useEffect, useState } from 'react'
import { Game } from '../../controllers/Game'
import { FindPatterns } from '../../controllers/PatternFinder'
import { Block, BlockType } from '../../types/Block'
import { Coordinate } from '../../types/Coordinate'
import { BlockView } from './BlockView'

interface ITableView {
    table: Block[][],
    setTable: React.Dispatch<React.SetStateAction<Block[][]>>
    history: Block[][][],
    setHistory: React.Dispatch<React.SetStateAction<Block[][][]>>
}

export const TableView: FC<ITableView> = ({ table, setTable, history, setHistory }) => {
    let [patterns, setPatterns] = useState(new Array<Array<Coordinate>>())

    useEffect(() => {
        setTable(Game.applyGravity([...table]))

    }, [])

    useEffect(() => {
        if (patterns.length != 0) {
            let newTB = [...table]
            let newHistory = [...history]

            //patterns.forEach(t => t.forEach(t => newTB[t.y][t.x].iluminate = true))
            //setHistory([...history, newTB])

            patterns.forEach(t => t.forEach(t => newTB[t.y][t.x] = new Block(BlockType.null, 0)))
            setTable(newTB);
        }
    }, [patterns])

    useEffect(() => {
        let newTB = Game.applyGravity([...table])

        if (!newTB.every((t, y) => t.every((t, x) => table[y][x].value == t.value))) {
            const newPatterns = FindPatterns(newTB)
            RegisterHistory([...newTB])
            setTable(newTB)
            setPatterns(newPatterns)
        }
    }, [table])

    const RegisterHistory = (tb: Block[][]) => {
        let newHistory = [...history]
        let newTB = Game.applyGravity(tb)
        newHistory.push(newTB)
        setHistory(newHistory)
    }

    return (
        <table>
            <tbody>
                {table.map((y, c_y) =>
                    <tr key={c_y}>
                        {y.map((x, c_x) =>
                            <BlockView
                                key={c_y + "-" + c_x}
                                cords={new Coordinate(c_y, c_x)}
                                block={x}
                            />
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )
}