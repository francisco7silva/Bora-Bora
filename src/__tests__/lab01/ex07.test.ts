import { minPassados } from "../../lab01/ex07";

describe("Test minPassados", () => {
    test(" 6 horas e 24 minutos passados devem ser 384 minutos", () => {

//Arrange
        const horas = 6;
        const minutos = 24;
        const expected = 384;

//Act

        let result = minPassados(horas, minutos);

//Assert    

        expect(result).toBe(expected);

    })  
})  