var nom = prompt("Ingrese su Nombre");
var cor = 0;
var incor = 0;
alert("Bienvenido, " + nom + ", al custionario sobre el turismo");
var res1 = prompt("1. ¿En qué departamento se encuentra el lago Titicaca? \nA. Tacna \nB. Puno \nC. Cusco");
if(res1=="B"){
    cor = cor +1;
}else{
    incor = incor + 1;
}
var res2 = prompt("2-¿Desde qué parte del Perú se pueden avistar ballenas jorobadas? \nA. Lima e Ica \nB. Arequiupa y Tacna \nC. Piura y Tumbes");
if(res2=="C"){
    cor = cor +1;
}else{
    incor = incor + 1;
}
var res3 = prompt("3. Plato típico de la Selva peruana \nA. Tacacho con cecina \nB. Arroz con pollo C\n. Lomo saltado");
if(res3=="A"){
    cor = cor +1;
}else{
    incor = incor + 1;
}
document.write("<h1>Custionario</h1>");
document.write("<h2>Resultado</h2>");
document.write("Hola "+ nom + ", tus resultados son: <br>");
document.write("Tus respuestas correctas son " + cor + "y tus respuestas incorrectas son " + incor);