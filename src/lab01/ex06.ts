function temperaturaFahrenheit(celsius: number): number {
    let Fahrenheit: number;
    Fahrenheit = 32 + (9/5) * celsius;

    return Fahrenheit;

}
console.log(temperaturaFahrenheit(28));

export { temperaturaFahrenheit }