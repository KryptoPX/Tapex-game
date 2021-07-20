class Block {
    Type: BlockType;    // Tipo de bloque
    value: number;      // Valor del bloque
    constructor(type: BlockType, num: number) {
        this.Type = type;
        this.value = num;
    }
}

enum BlockType {
    null = "null",
    block = "block"
}

export { Block, BlockType }