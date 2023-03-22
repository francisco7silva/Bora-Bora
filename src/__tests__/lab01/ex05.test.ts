import { hipotenusaTriangulo } from "../../lab01/ex05";

describe("Test hipotenusaTriangulo", () => {
    test(" a hipotenusa deve ser 5", () => {

//Arrange
        const cateto1 = 3;
        const cateto2 = 4;
        const expected = 5;
        
//Act
        let result = hipotenusaTriangulo(cateto1, cateto2);

//Assert
        expect(result).toBe(expected);
    })
})
