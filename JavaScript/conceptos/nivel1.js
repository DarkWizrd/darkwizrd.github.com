function nivel1() {
      //formas de declarar una variable en JavaScript
      const pi = 3.14;//declara una variable con valor constante
      let var1;//define una variable en el ámbito donde sea declarada (ciclos, funciones, decisiones)
      var abc;//var declara una variable accesible y editable (no es muy utilizada en la actualidad)


      //Tipos de datos en JavaScript

      let numero = 120806;//Números (enteros, decimales o negativos);
      let char = 'a'; //Caracteres, cualquier carácter ascii, mientras sea admitido por el lenguaje del navegador, de otro modo seran representados en el HTML como un rectángulo en blanco
      let cadena = "Esto es una cadena de caracteres";//Cualquier serie de 2 o mas caracteres se considera una cadena, inclusive los párrafos de mas de 2 lineas;
      let booleano = true; //Valores booleanos, son un tipo de dato primitivo que alterna entre verdadero 'true' o falso 'false'

      /* Operadores aritméticos
      + suma dos elementos
      - resta dos elementos
      * multiplica dos elementos
      / divide dos elementos y retorna el resultado de la division
      % divide dos elementos y retorna el residuo de la division ejemplo 1%2 es igual a 1.5 pero el residuo es 1 por lo que esta operación retornara 1
      
      == compara si a y b tienen el mismo valor, sin importar que uno sea carácter y el otro numero o cadena, esta comparación devuelve un valor booleano
      ejem: a=1,b='1'; a==b esta comparación devuelve TRUE.
    
      === los 3 iguales comparan si el contenido dentro de las variables es estrictamente igual, incluyendo el tipo de dato.
      ejem:a=1,b='1'; a===b esta expresión devuelve FALSE ya que la primera variable contiene un numero y la segunda un carácter.
      
      Negaciones:
      ! = compara si el valor de a y b son diferentes, similar a ==, este operador devuelve un valor booleano
      !== igual que el operador anterior, este operador compara si el valor de dos variables es distinto exactamente, contemplando el valor y el tipo de dato que están siendo comparados.
      
      < evalúa si un valor es menor que otro, retorna un booleano.
      > evalúa si un valor es mayor que otro, retorna un booleano.
      < = evalúa si un valor es menor o igual que otro, retorna un booleano.
      > = evalúa si un valor es mayor o igual que otro, retorna un booleano.
      
      && evalúa si dos condiciones se cumplen, retorna un booleano
      || evalúa dos condiciones y retorna TRUE si una u otra se cumplen, de otro modo devolverá FALSE  
      */

      /*
      Decisiones:
    
      if(valor==1){ alguna acción } si la condición se cumple se ejecutan las acciones,
      este tipo de decisiones admiten opciones alternativas si la condición no se cumple
      else{acción alternativa} esta acción se ejecutara si la decision no se cumple
    
      también es posible evaluar varias condiciones en una sola decision, a estas decisiones las conocemos como "Decisiones Anidadas"
      ejemplo
      If(condición){acción}
      else if(otra condición){acción diferente}
      else if(otra condición){acción diferente} estas decisiones pueden ser terminadas con un else que se ejecutara si ninguna de las otras decisiones se cumplen
      */

      /*
      Decisiones tipo Switch Case
      estas decisiones pueden utilizarse cuando tenemos valores específicos en una variable y multiples    comportamientos, son útiles por su estimabilidad y su declaración simple
    
      switch(variable){
    
        case1:
              accion;
              break;
        case2:
              accion;
              break;
        default:
                accion;
                break;
      }
      
      */


      let a = 1, b = 4;
      console.log(a || b)

}
