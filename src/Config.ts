class TableSize {
    height: number = 9
    width: number = 5
}

enum GameMode {
    inGame,
    Paused,
    History
}

class Config {
    Max: number = 6                                 // Numero maximo del tablero
    TableSize: TableSize = new TableSize()          // Tamaño del tablero
    static DevMode: Boolean = true                  // Especifica si la aplicación esta en un entorno de desarollo
    static GameMode: GameMode = GameMode.inGame     // Especifica en que estado se encuantra el juego
}

export { Config }