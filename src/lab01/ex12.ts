function alturaPredioV2( alturaEu: number, sombraEu: number, sombraPredio: number): number {
    let alturaPredio: number
    alturaPredio = (alturaEu * sombraPredio) / sombraEu;
    return alturaPredio
}
console.log (alturaPredioV2(2, 4, 40))

export { alturaPredioV2 }