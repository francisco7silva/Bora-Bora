function momentoSaudação(segundos: number): string {
    
    if (segundos >= (6 * 60 * 60)  && segundos <= (12 * 60 * 60 + 1)) {
        return "Bom dia";
    } else if (segundos >= (12 * 60 * 60 + 1) && segundos <= (20 * 60 * 60 + 1)) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

console.log(momentoSaudação(60000));
export { momentoSaudação };