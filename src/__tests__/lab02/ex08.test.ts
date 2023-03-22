import { momentoDia } from "../../lab02/ex08";

describe("Teste da função momentoDia", () => {
    test("Teste 1", () => {
        //Arrange
        const segundos = 10000;
        const momentoEsperado = "02:46:40";

        //Act
        let momento = momentoDia(segundos);

        //Assert
        expect(momento).toBe(momentoEsperado);

    })
})