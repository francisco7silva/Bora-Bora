import { alturaPredio } from "../../lab01/ex11";

describe ("alturaPredio", () => {
    test ("altura do predio deve ser 490.00000000000006", () => {

//Arrange
        const vInicial = 0
        const tempo = 10
        const aceleracao = 9.8
        const expected = 490.00000000000006

//Act
        let result = alturaPredio(vInicial, tempo, aceleracao)

//Assert
        expect(result).toBe(expected)
    })
})
        