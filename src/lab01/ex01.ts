function calcularPercentagemRapazes(nrapazes: number, nraparigas: number): number {
    let total: number;
    let percentagemRapazes: number;
    total = nrapazes + nraparigas;
    percentagemRapazes = nrapazes/total;

    return percentagemRapazes;

}

function calcularPercentagemRaparigas(nrapazes: number, nraparigas: number): number {
    let total: number;
    let percentagemRaparigas: number;
    total = nrapazes + nraparigas;
    percentagemRaparigas = nraparigas/total;

    return percentagemRaparigas;

}

console.log("Percentagem de rapazes: " + calcularPercentagemRapazes(10, 20));
console.log("Percentagem de raparigas: " + calcularPercentagemRaparigas(10, 20));

export { calcularPercentagemRapazes };
export { calcularPercentagemRaparigas };