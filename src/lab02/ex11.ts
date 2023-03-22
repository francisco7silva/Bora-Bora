export function numero3Digitos (numero: number): boolean {
    let unidades = numero % 10;
    let dezenas = Math.floor(numero / 10) / 10;
    let centenas = Math.floor(numero / 100);
    if (centenas < dezenas && dezenas < unidades) {
        return true;
    } else {    
        return false;
    }
}
console.log(numero3Digitos(123));