import { Block, BlockType } from "../types/Block";
import { Coordinate } from "../types/Coordinate";

function FindPatterns(table: Block[][]): Coordinate[][] {
    let foundPatterns: Coordinate[][] = new Array<Array<Coordinate>>();

    for (let y = 0; y < table.length; y++) {
        for (let x = 0; x < table[y].length; x++) {
            var P = CheckPatterns(table, new Coordinate(y, x), [])
            if (P != undefined) foundPatterns.push(P)
        }
    }

    let reduced: Coordinate[][] = new Array<Array<Coordinate>>();
    foundPatterns.forEach(element => {
        if (reduced.find(itm => JSON.stringify(itm) == JSON.stringify(element)) == undefined) {
            reduced.push(element);
        }
    });

    return reduced
}

function CheckNumberExistInArray(Arr: Coordinate[], item: Coordinate): boolean {
    return Arr.find(t => t.x == item.x && t.y == item.y) != undefined
}

function CheckPatterns(table: Block[][], target: Coordinate, foundCords: Coordinate[]): Coordinate[] | undefined {
    if (table[target.y][target.x].Type == BlockType.null) return undefined
    let Blocks = [...table]
    let diff: Coordinate[] = [...foundCords]

    for (let i = 1; i <= 4; i++) {
        let S: Coordinate
        let N: Block | undefined = undefined;
        switch (i) {
            case 1: S = new Coordinate(target.y + 1, target.x); break; // DOWN
            case 2: S = new Coordinate(target.y - 1, target.x); break; // UP
            case 3: S = new Coordinate(target.y, target.x + 1); break; // <-
            case 4: S = new Coordinate(target.y, target.x - 1); break; // ->
            default: S = new Coordinate(-1, -1); break;
        }
        if (Blocks[S.y] != undefined && Blocks[S.y][S.x] != undefined) {
            N = Blocks[S.y][S.x]
            if (Blocks[target.y][target.x].value == N.value && !CheckNumberExistInArray(foundCords, S)) foundCords.push(S)
        }

    }

    foundCords.sort((x, y) => {
        let [a, b] = [x.y + x.x, y.y + y.x]
        if (a < b) return 1
        if (a > b) return -1
        return 0
    });
    
    if (diff.length == foundCords.length) return undefined

    for (let i = 0; i < foundCords.length; i++) {
        let T = CheckPatterns(table, foundCords[i], foundCords)
        if (T != undefined) {
            foundCords = T
        }
    }

    return foundCords
}

export { FindPatterns }