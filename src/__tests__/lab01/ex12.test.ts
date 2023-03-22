import { alturaPredioV2 } from "../../lab01/ex12";
describe ("alturaPredioV2", () => {
    test ("altura do predio deve ser 20", () => {
//Arrange
        const alturaEu = 2
        const sombraEu = 4
        const sombraPredio = 40
        const expected = 20

//Act
        let result = alturaPredioV2(alturaEu, sombraEu, sombraPredio)

//Assert
        expect(result).toBe(expected)
    })
})
