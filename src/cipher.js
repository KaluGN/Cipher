window.cipher = {
  encode: (output,clave) => {
    let output = "";
    const clave = parseInt(offset);
      for (let i=0; i<string.length; i++){
    let formula = (string.charCodeAt(i) - 65 + clave) % 26 + 65;
      output += String.fromCharCode(formula);
    } return output;
  },

  decode: (output, clave) => {
    let output = "";
    const clave = parseInt(offset);
      for( let i=0;i<string.length;i++){
    let formula = (string.charCodeAt(i) - 90 - clave) % 26 + 90;
      output += String.fromCharCode(formula);
    } return output;
  }
};
