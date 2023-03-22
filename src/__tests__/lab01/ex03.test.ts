import { vCilindro } from "../../lab01/ex03";
describe("vCilindro", () => {
    test("deve conseguir armazenar 2356.194490192345 litros", () => {

//Arrange
        const raio = 0.5;
        const altura = 3;
        const expected = 2356.194490192345;
        
//Act
        let result = vCilindro(raio, altura);

//Assert

        expect(result).toBe(expected);  
    })
 })