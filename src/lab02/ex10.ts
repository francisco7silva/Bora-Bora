export function multiplos (x: number, y: number): string {
    if (x % y == 0) {
        return "São múltiplos";
    } else if (y % x == 0) {
        return "São múltiplos";
    } else {
        return "Não são múltiplos";
    }
}
console.log (multiplos(2, 4));