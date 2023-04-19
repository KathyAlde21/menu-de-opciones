/* Menú de opciones */
/*
\n es salto de línea
Seleccione que debe hacer:
1.- Calcular cuál número es mayor
2.- Sumar
3.- Restar
4.- Multiplicar
5.- Dividir
6.- Mostrar los número ingresados
7.- Salir
*/

/* Preguntas */
function menu() {
    do {
        var opcion = parseInt(prompt('Seleccione que debe hacer:\n 1.- Calcular cuál número es mayor\n 2.- Sumar\n 3.- Restar\n 4.- Multiplicar\n 5.- Dividir\n 6.- Mostrar los números ingresados\n 7.- Salir'));
        switch (opcion) {
            case 1: // 1.- Calcular cuál número es mayor - ok
                var numeroUno = prompt('Ingresa el primer número: ');
                var numeroDos = prompt('Ingresa el segundo número: ');
            
                if (numeroUno == numeroDos) {
                    alert('Los números son iguales');
                }else if (numeroUno > numeroDos) {
                    alert(numeroUno + ' es mayor que ' + numeroDos);
                }else{
                    alert(numeroDos + ' es mayor que ' + numeroUno);
                }
            
                break;
            
            case 2: // 2.- Sumar - ok
                var numeroUno = prompt('Ingresa el primer número: ');
                var numeroDos = prompt('Ingresa el segundo número: ');
        
                function suma(numeroUno, numeroDos) {
                    var numeroUnoInt = parseInt(numeroUno);
                    var numeroDosInt = parseInt(numeroDos);
                    var resultado = numeroUnoInt + numeroDosInt;
                    alert('La suma de los números ' + numeroUnoInt + ' y ' + numeroDosInt + ' es ' + resultado);
                }
                suma(numeroUno, numeroDos);
        
                break;
        
            case 3: //3.- Restar - ok
                var numeroUno = prompt('Ingresa el primer número: ');
                var numeroDos = prompt('Ingresa el segundo número: ');
        
                function resta(numeroUno, numeroDos) {
                    var numeroUnoInt = parseInt(numeroUno);
                    var numeroDosInt = parseInt(numeroDos);
                    var resultado = numeroUnoInt - numeroDosInt;
                    alert('El resultado es: ' + resultado);
                }
                resta(numeroUno, numeroDos);
        
                break;
        
            case 4: // 4.- Multiplicar - ok
                var numeroUno = prompt('Ingresa el primer número: ');
                var numeroDos = prompt('Ingresa el segundo número: ');
        
                function multiplicacion(numeroUno, numeroDos) {
                    var numeroUnoInt = parseInt(numeroUno);
                    var numeroDosInt = parseInt(numeroDos);
                    var resultado = numeroUnoInt * numeroDosInt;
                    alert('El resultado es: ' + resultado);
                }
                multiplicacion(numeroUno, numeroDos);
        
                break;

                   
             /* --------------- */
   
            case 5: // 5.- División - val                                                                                        idando que no puedan ingresar 0
                /* - variables -*/
                var numeroUno = prompt('Ingresa el primer número: ');
                var numeroDos = prompt('Ingresa el segundo número: ');
            
                function division(numeroUno, numeroDos) {
                    var numeroUnoInt = parseInt(numeroUno);
                    var numeroDosInt = parseInt(numeroDos);
                    var resultado = numeroUnoInt / numeroDosInt;
                    alert('El resultado es: ' + resultado); 
                }
                division(numeroUno, numeroDos);


            /* --------------- */



                break;
        
            case 6: // 6.- Mostrar los número ingresados - ok
                var numeroUno = prompt('Ingresa el primer número: ');
                var numeroDos = prompt('Ingresa el segundo número: ');
                alert('Los números ingresados son ' + numeroUno + ' y ' + numeroDos);
        
                break;
        
            case 7: // 7.- Salir - ok
                alert('Gracias por participar');
                break;
        }  
    } while (opcion != 7); //salir - ok
}    

menu();
