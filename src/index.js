// declarar variables//
const numero = document.getElementById("saltos");
const texto = document.getElementById("string");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const output = document.getElementById("output");

//funcion de cifrado
function encode (offset,string) {
   let output = "";
   const clave = parseInt(offset);
      for (i=0; i<string.length; i++){
      let formula = (string.charCodeAt(i) - 65 + clave)%26 + 65;
        output += String.fromCharCode(formula);
     }  return output;
     }

   const btnCifrar = () => {
        console.log('hola');
        console.log(encode(numero.value,texto.value));
        output.value = encode(numero.value,texto.value);
   } 
   boton1.addEventListener("click", btnCifrar);

//función de descifrado
function decode (offset,string) {
    let output = "";
    const clave = parseInt(offset);
       for (i=0; i<string.length; i++){
       let formula = (string.charCodeAt(i) - 65 - clave)%26 + 65;
         output += String.fromCharCode(formula);
      }  return output;
      }
 
    const btnCifrar2 = () => {
         console.log('chau');
         console.log(decode(numero.value,texto.value));
         output.value = decode(numero.value,texto.value);
    } 
    boton2.addEventListener("click", btnCifrar2);