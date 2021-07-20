import { Config } from "../Config";
import { Block, BlockType } from "../types/Block";

function RND(min: number, max: number): number {
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min
}

class Game {
    static config: Config = new Config()

    public static GenTable(): Block[][] {
        let table: Block[][] = new Array<Array<Block>>();
        for (let i = 0; i < this.config.TableSize.height; i++) {
            const blockList: Block[] = Array<Block>();
            for (let x = 0; x < this.config.TableSize.width; x++) {
                const num: number = RND(0, this.config.Max);
                blockList.push(new Block(num == 0 ? BlockType.null : BlockType.block, num))
            }
            table.push(blockList)
        }
        return table;
    }
}

export { Game }