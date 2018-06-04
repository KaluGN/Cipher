// declarar variables//
const numero = document.getElementById("saltos");
//const textoMayu = texto.toUpperCase("string");
const texto = document.getElementById("string");

/*/función a mayus
textog = () => {
 let textog = "string".toUpperCase().value; //= output;
 document.getElementById("string").value = textog;
}*/

/*/funcion de cifrado
encode = (offset,string) => {
  let output = "";
  const clave = parseInt(offset);
    for (i=0; i<string.length; i++){
  let formula = (string.charCodeAt(i) - 65 + clave) % 26 + 65;
    output += String.fromCharCode(formula);
  } return output;
} */
 let botonCifrar = document.getElementById("boton1");
   botonCifrar.addEventListener("click",() => {
    document.getElementById("output").value=window.cipher.encode(texto.value,numero.value);
   })

/*función de descifrado
decode = (offset,string) => {
  let output = "";
  const clave = parseInt(offset);
    for(let i=0;i<string.length;i++){
  let formula = (string.charCodeAt(i) - 90 - clave) % 26 + 90;
    output += String.fromCharCode(formula);
  } return output;
}*/

let botonDescifrar = document.getElementById("boton2");
botonDescifrar.addEventListener("click",() => {
 document.getElementById("output").value=window.cipher.decode(texto.value,numero.value);
})