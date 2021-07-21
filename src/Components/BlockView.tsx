import React, { FC } from 'react'
import { Block } from "../types/Block";
import { Coordinate } from '../types/Coordinate';
import "./BlockView.scss"

interface IBlockView {
    block: Block,
    cords: Coordinate,
    triggerOnHover: (y: number, x: number) => void
}

export const BlockView: FC<IBlockView> = ({ block, cords, triggerOnHover }) => {
    let tags = { num: block.value }

    const handlerOnMouseEnter = () => {
        triggerOnHover(cords.y, cords.x)
    }

    const handlerOnMouseLeave = () => {
        triggerOnHover(-1, -1)
    }

    return (
        <td className={block.iluminate ? "active" : ""} onMouseEnter={handlerOnMouseEnter} onMouseLeave={handlerOnMouseLeave} {...tags}>{block.value}</td>
    )
}