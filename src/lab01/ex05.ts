function hipotenusaTriangulo (cateto1: number, cateto2: number): number {
    let hipotenusa: number;
    let hipotenusa2: number;

    hipotenusa2 = (cateto1**2) + (cateto2**2);
    hipotenusa = Math.sqrt(hipotenusa2);

    return hipotenusa;
}
console.log(hipotenusaTriangulo(3,4));

export { hipotenusaTriangulo }