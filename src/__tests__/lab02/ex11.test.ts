import { numero3Digitos } from "../../lab02/ex11";
describe("Testes do exercício 11", () => {
    test("Número é crescente", () => {
        //Arrange
        const numero = 123;
        const resultadoEsperado = true;
        //Act
        let resultado = numero3Digitos(numero);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})

describe("Testes do exercício 11", () => {
    test("Número nao é crescente", () => {
        //Arrange
        const numero = 362;
        const resultadoEsperado = false;
        //Act
        let resultado = numero3Digitos(numero);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})