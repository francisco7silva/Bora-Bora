import { calcularPercentagemRapazes, calcularPercentagemRaparigas } from "../../lab01/ex01";

describe("calcularPercentagemRapazes", () => {
    test("deve retornar 0,3333333333333333 quando nrapazes=10 e nraparigas=20", () => {

//Arrange
        const nrapazes = 10;
        const nraparigas = 20;
        const expected = 0.3333333333333333;

//Act
        let percentagemRapazes = calcularPercentagemRapazes(nrapazes, nraparigas);

//Assert

        expect(percentagemRapazes).toBe(expected);
    })
})

describe("calcularPercentagemRaparigas", () => {
    test("deve retornar 0,6666666666666666 quando nrapazes=10 e nraparigas=20", () => {

//Arrange
        const nrapazes = 10;
        const nraparigas = 20;
        const expected = 0.6666666666666666;

//Act
        let percentagemRaparigas = calcularPercentagemRaparigas(nrapazes, nraparigas);

//Assert

        expect(percentagemRaparigas).toBe(expected);
    })
})
