import { temperaturaFahrenheit } from "../../lab01/ex06";

describe("Test temperaturaFahrenheit", () => {
    test(" a temperatura em Fahrenheit deve ser 82.4", () => {

//Arrange
        const celsius = 28;
        const expected = 82.4;

//Act
        let result = temperaturaFahrenheit(celsius);

//Assert
        expect(result).toBe(expected);
    })
})