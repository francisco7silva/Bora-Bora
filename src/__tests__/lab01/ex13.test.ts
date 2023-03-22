import { distanciaOperarios } from "../../lab01/ex13";

describe ("distanciaOperarios", () => {
    test ("distancia entre os operarios deve ser 52.91502622129181 ", () => {

//Arrange
        const a = 60
        const b = 40
        const anguloa = 60
        const expected = 52.91502622129181

//Act   
        let result = distanciaOperarios(a, b, anguloa)

//Assert    
        expect(result).toBe(expected)
    })
})
