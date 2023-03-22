import { respetivaFunção } from "../../lab02/ex06";
describe("Testes do exercício 06", () => {
    test("Teste 1", () => {
        //Arrange
        const x = -3;

        //Act
        const result = respetivaFunção(x);

        //Assert
        expect(result).toBe(-3);
    })
})

describe("Testes do exercício 06", () => {
    test("Teste 1", () => {
        //Arrange
        const x = 0;

        //Act
        const result = respetivaFunção(x);

        //Assert
        expect(result).toBe(0);
    })
})

describe("Testes do exercício 06", () => {
    test("Teste 1", () => {
        //Arrange
        const x = 5;

        //Act
        const result = respetivaFunção(x);

        //Assert
        expect(result).toBe(15);
    })
})