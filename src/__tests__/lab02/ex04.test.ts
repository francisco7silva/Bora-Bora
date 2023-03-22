import { retornoDigito1 } from "../../lab02/ex04";

describe("Testes - Exercício 4", () => {
    test("Testa se a função retorna o primeiro digito de um número de 3 digitos", () => {

        //Arrange
        let numero: number = 123;
        let resultadoEsperado: number = 1;

        //Act
        let resultado: number = retornoDigito1(numero);

        //Assert
        expect(resultado).toBe(resultadoEsperado);

    })
})
describe("Testes - Exercício 4", () => {
    test("Testa se a função retorna o digito1 com valor -1", () => {

        //Arrange
        let numero: number = 76;
        let resultadoEsperado: number = -1;
        
        //Act
        let resultado: number = retornoDigito1(numero);

        //Assert
        expect(resultado).toBe(resultadoEsperado);

    })
})


