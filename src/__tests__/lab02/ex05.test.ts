import { numeroPar } from "../../lab02/ex05";

describe("Testes - Exercício 5", () => {
    test("Testa se a função retorna true para um número par", () => {

        //Arrange
        let numero: number = 10;
        let resultadoEsperado: boolean = true;

        //Act
        let resultado: boolean = numeroPar(numero);

        //Assert
        expect(resultado).toBe(resultadoEsperado);

    })
})

describe ("Testes - Exercício 5", () => {
    test ("Testa se a função retorna false para um número impar", () => {

        //Arrange
        let numero: number = 11;
        let resultadoEsperado: boolean = false;

        //Act
        let resultado: boolean = numeroPar (numero);

        //Assert
        expect (resultado) .toBe (resultadoEsperado);

    })
})