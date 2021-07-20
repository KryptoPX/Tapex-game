import React, { FC } from 'react'
import { Block } from '../types/Block'
import { BlockView } from './BlockView'

interface ITableView {
    table: Block[][],
    setTable: React.Dispatch<React.SetStateAction<Block[][]>>
}

export const TableView: FC<ITableView> = ({ table, setTable }) => {
    return (
        <>
            <table>
                <tbody>
                    {table.map((y, yi) =>
                        <tr key={yi}>
                            {y.map((x, xi) => <BlockView key={yi + "-" + xi} block={x} />)}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}