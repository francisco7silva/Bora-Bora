import { distancia2Pontos } from "../../lab02/ex03";

describe("test distancia2Pontos", () => {
    test("distancia2Pontos deve ter o valor 0.58309518948453", () => {

//Arrange
        const x1: number = 1;
        const x2: number = 1.5;
        const y1: number = 2.7;
        const y2: number = 3;
        const distanciaEsperada: number = 0.58309518948453;

//Act

        let distancia = distancia2Pontos(x1, x2, y1, y2);
    
//Assert

        expect (distancia).toBe(distanciaEsperada);

    })
})