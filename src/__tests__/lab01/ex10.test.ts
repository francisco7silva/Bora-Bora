import { valorX } from "../../lab01/ex10";

describe ("valorX", () => {
    test ("valor de x deve ser 11", () => {

//Arrange
        const x = 2
        const expected = 11

//Act  
        let result = valorX(x)

//Assert
        expect(result).toBe(expected)
    })
})
