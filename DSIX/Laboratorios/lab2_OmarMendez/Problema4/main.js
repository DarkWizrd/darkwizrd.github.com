let sumpar=0, sumnon=0,i=0;
while(i <= 500){
  if (i % 2 == 0) {
    sumpar += i;
    console.log("vuelta "+i+" : "+sumpar);
  } else { sumnon += i; }
  i++
}
alert("La suma de los números pares de 1 a 500 es: " + sumpar + "\n" +
      "La suma de los números impares de 1 a 500 es: " + sumnon);