function momentoDia(segundos: number): string {
    let horas: number;
    let minutos: number;
    let segundosrestantes: number;
    horas = Math.floor(segundos / 3600);
    minutos = Math.floor((segundos - (horas * 3600)) / 60);
    segundosrestantes = segundos - (horas * 3600) - (minutos * 60);

    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosrestantes.toString().padStart(2, '0')}`;
}

console.log(momentoDia(30000));
export { momentoDia };

