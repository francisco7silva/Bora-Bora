function volumeCubo(area: number): number {
    let aresta: number;
    let volume: number;
    if (area > 0){
        aresta = Math.sqrt(area / 6);
        volume = aresta ** 3;
}
    else
        volume = -1;
    return volume;
}
console.log (volumeCubo(100));
export {volumeCubo}

function volumeCubov2(area: number): string {
    let aresta: number;
    let volume: number;
    if (area > 0){
        aresta = Math.sqrt(area / 6);
        volume = aresta ** 3;
}
    else
        volume = -1;
        if (volume <= 1)
            return "pequeno";
        else
           if (volume >1 && volume <= 2)
            return "medio";
        else
            return "grande";
}
console.log (volumeCubov2(100));
export {volumeCubov2}