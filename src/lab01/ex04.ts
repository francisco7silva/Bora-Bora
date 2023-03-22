function perimetroRetangulo( largura: number, cumprimento: number): number {
    let perimetro: number;
    perimetro = 2 * (largura + cumprimento);

    return perimetro;
}
console.log (perimetroRetangulo(5, 2));

export { perimetroRetangulo}