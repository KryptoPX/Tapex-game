import React, { FC, useEffect, useState } from 'react'
import { Game } from '../controllers/Game'
import { FindPatterns } from '../controllers/PatternFinder'
import { Block } from '../types/Block'
import { Coordinate } from '../types/Coordinate'
import { BlockView } from './BlockView'

interface ITableView {
    table: Block[][],
    setTable: React.Dispatch<React.SetStateAction<Block[][]>>
}

export const TableView: FC<ITableView> = ({ table, setTable }) => {
    let [cords, setCords] = useState(new Array<Array<Coordinate>>())

    useEffect(() => {
        let newTB = Game.applyGravity(table)
        setTable(newTB)
        setCords(FindPatterns(newTB))
    }, [])

    const triggerOnHover = (y: number, x: number) => {
        const newTB = [...table]

        if (y == -1 && x == -1) {
            newTB.forEach(t => t.forEach(t => t.iluminate = false))
        } else {
            cords.find(t => t.find(t => t.x == x && t.y == y) != undefined)?.forEach(t => newTB[t.y][t.x].iluminate = true)
        }

        setTable(newTB)
    }

    const handlerOnClick = () => {

    }

    return (
        <>
            <table>
                <tbody>
                    {table.map((y, c_y) =>
                        <tr key={c_y}>
                            {y.map((x, c_x) => <BlockView key={c_y + "-" + c_x} cords={new Coordinate(c_y, c_x)} triggerOnHover={triggerOnHover} block={x} />)}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}