function minPassados (horas: number, minutos: number): number {
    let minutosPassados: number
    minutosPassados = horas * 60 + minutos
    return minutosPassados

}

console.log (minPassados (6, 24))

export {minPassados}