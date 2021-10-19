/*  app.js
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

//Importaciones
import {Dado} from 'dado.js';

class App{
    constructor(){
        this.dados = [];
        this.resultado = 0;
    }
    anadirDado(){
        this.dados.push(new Dado(document.getElementById('caras'), document.getElementById('minimo'), document.getElementById('paso')));
    }
    tirar(){
        for(let i = 0; i < this.dado.length; i++)
            this.resultado += this.dados[i].tirarDados();
        document.getElementById('resultado').innerHTML = this.resultado;
    }
}

new App();