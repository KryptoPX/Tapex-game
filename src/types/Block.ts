class Block {
    Type: BlockType;                // Tipo de bloque
    value: number;                  // Valor del bloque
    iluminate: boolean = false;     // Define si el bloque se ilumina
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