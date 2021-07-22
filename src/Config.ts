class TableSize {
    height: number = 9
    width: number = 5
}

class Config {
    Max: number = 6                         // Numero maximo del tablero
    TableSize: TableSize = new TableSize()  // Tamaño del tablero
    static DevMode: Boolean = true;         // Especifica si la aplicación esta en un entorno de desarollo
}





export { Config }