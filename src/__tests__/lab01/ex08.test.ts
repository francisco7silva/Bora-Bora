import { distanciaTrovão } from "../../lab01/ex08";

describe ("distanciaTrovão", () => {
    test ("distanciaTrovão (3) = 1020", () => {
       
//Arrange
        const tempo = 3
        const expected = 1020

//Act   
        let result = distanciaTrovão(tempo)

//Assert
        expect(result).toBe(expected)
    })  
})  