function retornoDigito1(numero: number): number {
    let digito1: number;
    let digito2: number;
    let digito3: number;
    if (numero < 100 || numero > 999) {
        console.log("Numero não tem 3 digitos");
        digito1 = -1;

    }
    else {
        digito3 = numero % 10;
        digito2 = (Math.floor(numero / 10)) % 10;
        digito1 = Math.floor(numero / 100) % 10;
    }
    return digito1;
}
console.log(retornoDigito1(123));
export { retornoDigito1 };