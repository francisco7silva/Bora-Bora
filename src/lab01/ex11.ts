function alturaPredio(vInicial: number, tempo: number, aceleracao: number): number {
    let altura: number
    altura = vInicial * tempo + (aceleracao * tempo**2) / 2;
    return altura
}
console.log (alturaPredio(0, 10, 9.8))

export {alturaPredio}