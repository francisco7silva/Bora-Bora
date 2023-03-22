import { mediaPesada } from "../../lab02/ex01";
describe("test mediaPesada", () => {
        test("mediaPesada deve ter o valor 9.8", () => {

                //Arrange
                const nota1: number = 8;
                const nota2: number = 10;
                const nota3: number = 12;
                const peso1: number = 0.4;
                const peso2: number = 0.3;
                const peso3: number = 0.3;
                const mediaEsperada: number = 9.8;

                //Act

                let media = mediaPesada(nota1, nota2, nota3, peso1, peso2, peso3);

                //Assert

                expect(media).toBe(mediaEsperada);

        })
})