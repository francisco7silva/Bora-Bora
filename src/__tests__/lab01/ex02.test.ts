import { preçoRamo } from "../../lab01/ex02";
 describe("preçoRamo", () => {
    test("preço do ramo terá de ser igual a 9.3", () => {
        
//Arrange
        const nrosas = 3;
        const ntulipas = 2;
        const preçorosas = 2.1;
        const preçotulipas = 1.5;
        const expected = 9.3;

//Act
        let preço = preçoRamo(nrosas, ntulipas, preçorosas, preçotulipas);

//Assert

        expect(preço).toBe(expected);
   
    })
})
