function valorX (x: number): number {
    let valor: number
    valor = x**2 + 3 * x + 1
    return valor
}
console.log(valorX(2))

export {valorX}