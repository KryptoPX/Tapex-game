import React, { FC } from 'react'
import { Block } from "../../types/Block";
import { Coordinate } from '../../types/Coordinate';
import "./BlockView.scss"

interface IBlockView {
    block: Block
}

export const BlockView: FC<IBlockView> = ({ block }) => {
    let tags = { num: block.value }

    return (
        <td className={block.iluminate ? "active" : ""} {...tags}>{block.value}</td>
    )
}