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
import {Dado} from './dado.js';

class App{
    constructor(){
        this.dados = [];
        this.resultado;
    }
    anadirDado(){
        this.dados.push(new Dado(document.getElementById('caras').value, document.getElementById('minimo').value, document.getElementById('paso').value));
        console.log('El dado ha sido añadido correctamente');
    }
    tirar(){
        this.resultado = Dado.tirarDados(this.dados);
        document.getElementById('resultado').innerHTML = this.resultado;
    }
}
window.app = new App();
