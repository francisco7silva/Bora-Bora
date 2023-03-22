import { valorEsperado } from "../../lab02/ex02";

describe("test valorEsperado", () => {
    test("valorEsperado deve ter o valor true", () => {

        //Arrange
        const num: number = 8;
        const expectedValue: boolean = true;

        //Act

        let valor = valorEsperado(num);

        //Assert

        expect(valor).toBe(expectedValue);

    })
})

describe("test valorEsperado", () => {
    test("valorEsperado deve ter o valor false", () => {

        //Arrange
        const num: number = 7;
        const expectedValue: boolean = false;

        //Act

        let valor = valorEsperado(num);

        //Assert

        expect(valor).toBe(expectedValue);

    })
})