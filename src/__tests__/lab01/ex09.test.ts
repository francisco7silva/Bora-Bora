import { distanciaZe } from "../../lab01/ex09";

describe ("distanciaZe", () => {
    test ("distancia que Ze percorreu deve ser 11.325565152", () => {

//Arrange
        const tempo = 10.4544
        const velocidade = 1.08333
        const expected = 11.325565152

//Act
        let result = distanciaZe(tempo, velocidade)

//Assert
        expect(result).toBe(expected)
    })
})
