import { multiplos } from "../../lab02/ex10";
describe("Testes - Exercício 10", () => {
    test("Teste 1", () => {
        //Arrange
        const x = 2;
        const y = 4;
        const resultadoEsperado = "São múltiplos";
        //Act
        let resultado = multiplos(x, y);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("Testes - Exercício 10", () => {
    test("Teste 2", () => {
        //Arrange
        const x = 4;
        const y = 2;
        const resultadoEsperado = "São múltiplos";
        //Act
        let resultado = multiplos(x, y);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})

describe("Testes - Exercício 10", () => {
    test("Teste 3", () => {
        //Arrange
        const x = 3;
        const y = 4;
        const resultadoEsperado = "Não são múltiplos";
        //Act
        let resultado = multiplos(x, y);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})

