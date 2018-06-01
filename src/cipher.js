window.cipher = {
  encode: (output,clave) => {
    let output = "";
    const clave = parseInt(offset);
      for (i=0; i<string.length; i++){
    let formula = (string.charCodeAt(i) - 65 + clave) % 26 + 65;
      output += String.fromCharCode(formula);
    } return output;
  },

  decode: (outpu, clave) => {
    let output = "";
    const clave = parseInt(offset);
      for(i=0;i<string.length;i++){
    let formula = (string.charCodeAt(i)-65-clave) % 26 + 65;
      output += String.fromCharCode(formula);
    } return output;
  }
};
