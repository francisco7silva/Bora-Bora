function distancia2Pontos (x1: number, x2: number, y1:number, y2: number): number {
    let distancia: number;
    distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    return distancia

}
console.log (distancia2Pontos(1, 1.5, 2.7, 3));
export {distancia2Pontos};