var texto = "Ejercitando en la noche";
var texto_en_M = texto.toUpperCase();

var texto2 = "Hola, buenas tardes";
var texto2_cortado = texto2.substring(0,5);

var texto3 = "Aloja, buenas noches";
var texto3_cortado = texto3.substring(texto3.length-3, texto3.length);

var texto4 = "Este texto pronto va a ser modificado"
var texto4_modif = texto4.substring(0,1).toUpperCase() + texto4.substring(1, texto4.length).toLowerCase();

var texto5 = "El ejercicio lo senti muy extenso"
var textoEspacio = texto5.indexOf(" ");

var texto6 = "Republica Argentina";
var texto6Espacio = texto6.indexOf(" ");
var texto6_modif = texto6.substring(0, 1).toUpperCase() + texto6.substring(1, texto6Espacio).toLowerCase() + " " + texto6.substring(texto6Espacio+1, texto6Espacio+2).toUpperCase() + texto6.substring(texto6Espacio+2, texto6.length).toLowerCase();
