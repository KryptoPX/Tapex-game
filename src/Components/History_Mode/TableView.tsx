import React, { FC, useEffect, useState } from 'react'
import { Game } from '../../controllers/Game'
import { FindPatterns } from '../../controllers/PatternFinder'
import { Block, BlockType } from '../../types/Block'
import { Coordinate } from '../../types/Coordinate'
import { BlockView } from './BlockView'

interface ITableView {
    table: Block[][]
}

export const TableView: FC<ITableView> = ({ table}) => {

    return (
        <table>
            <tbody>
                {table.map((y, c_y) =>
                    <tr key={c_y}>
                        {y.map((x, c_x) => <BlockView key={c_y + "-" + c_x} block={x} /> )}
                    </tr>
                )}
            </tbody>
        </table>
    )
}