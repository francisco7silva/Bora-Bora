function mediaPesada (nota1: number, nota2: number, nota3: number, peso1: number, peso2: number, peso3: number): number {
    let media: number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)
    return media
}

console.log (mediaPesada (8,10,12,0.4,0.3,0.3))

export {mediaPesada}
