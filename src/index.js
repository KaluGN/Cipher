// declarar variables//
const numero = document.getElementById("saltos");
//const textoMayu = texto.toUpperCase("string");
const texto = document.getElementById("string");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const output = document.getElementById("output");   

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

   btnCifrar.addEventListener("click", () => {
     window.cipher.encode(texto.value,numero.value)=boton1;
   }

/*función de descifrado
decode = (offset,string) => {
  let output = "";
  const clave = parseInt(offset);
    for(let i=0;i<string.length;i++){
  let formula = (string.charCodeAt(i) - 90 - clave) % 26 + 90;
    output += String.fromCharCode(formula);
  } return output;
}*/

   btnCifrar2.addEventListener("click", () => {
    window.cipher.decode(texto.value,numero.value)=boton1;
}