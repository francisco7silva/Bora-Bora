function respetivaFunção(x: number): number {
    let xx: number;
    if (x < 0)
        return x;
    else if (x == 0)
        return 0;
    else 
        xx = (x**2) - (2 * x);
        return xx;
    
    
}
    console.log(respetivaFunção(5));
    export {respetivaFunção};


