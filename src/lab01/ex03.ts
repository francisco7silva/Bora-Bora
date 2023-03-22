function vCilindro(raio: number, altura: number): number {
    let volume: number;
    let litros: number;

    volume = Math.PI * raio * raio * altura;
    litros = volume * 1000;

    return litros;
}

console.log (vCilindro(0.5, 3));

export {vCilindro}