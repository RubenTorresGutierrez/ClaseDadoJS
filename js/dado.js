/*  dado.js
    PROYECPOLI | Dado en JS
    Una clase dado que permite recibir el número de caras del dado y hacer un lanzamiento de 
    X dados con X caras cada uno (pueden ser diferentes por cada dado)
    Autores:
        - Pablo Ceballos Benítez <pceballosbenitez.guadalupe@alumnado.fundacionloyola.net>
        - Ángel Manuel Fernández Baños <amfernandezbanos.guadalupe@alumnado.fundacionloyola.net>
        - Juanjo Carrasco Rodríguez <jcarrascorodriguez.guadalupe@alumnado.fundacionloyola.net>
        - Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

export class Dado{
    constructor(caras, minimo, paso){
        this.caras = caras;
        this.minimo = minimo;
        this.paso = paso;
    }
    static tirarDados(){
        return Math.floor(Math.random() * this.caras) * this.paso + this.minimo;
    }
}