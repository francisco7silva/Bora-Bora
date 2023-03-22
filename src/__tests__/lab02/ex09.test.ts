import { momentoSaudação } from "../../lab02/ex09";
describe("Teste da função momentoSaudação", () => {
    test("Teste 1", () => {
        //Arrange
        const segundos = 30000;
        const momentoEsperado = "Bom dia";
    

        //Act
        let momento = momentoSaudação(segundos);
        

        //Assert
        expect(momento).toBe(momentoEsperado);
       

    })
})

describe("Teste da função momentoSaudação", () => {
    test("Teste 2", () => {
        //Arrange
        const segundos = 60000;
        const momentoEsperado = "Boa tarde";
    

        //Act
        let momento = momentoSaudação(segundos);
   

        //Assert
        expect(momento).toBe(momentoEsperado);
       

    })
})

describe("Teste da função momentoSaudação", () => {
    test("Teste 3", () => {
        //Arrange
        const segundos = 80000;
        const momentoEsperado = "Boa noite";
        

        //Act
        let momento = momentoSaudação(segundos);
       

        //Assert
        expect(momento).toBe(momentoEsperado);
      

    })
})