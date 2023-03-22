import { perimetroRetangulo } from "../../lab01/ex04";

describe("perimetroRetangulo", () => {
    test("o valor do perimetro deve ser 14", () => {

//Arrange
        const largura = 5;
        const cumprimento = 2;
        const expected = 14;

//Act
        let result = perimetroRetangulo(largura, cumprimento);

//Assert

        expect(result).toBe(expected);
    })
})
