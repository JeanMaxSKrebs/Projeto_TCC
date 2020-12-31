//funçoes cpf

function is_cpf (c) {

    if((c = c.replace(/[^\d]/g,"")).length != 11)
      return false
  
    if (c == "00000000000")
      return false;
  
    var r;
    var s = 0;
  
    for (i=1; i<=9; i++)
      s = s + parseInt(c[i-1]) * (11 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[9]))
      return false;
  
    s = 0;
  
    for (i = 1; i <= 10; i++)
      s = s + parseInt(c[i-1]) * (12 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[10]))
      return false;
  
    return true;
  }
  
  
  function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
  }
  
    function fMascEx() {
  obj.value=masc(obj.value)
  }
  
  function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
  }
  
  cpfCheck = function (el) {
      document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? '<span style="color:green">válido</span>' : '<span style="color:red">inválido</span>';
      if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
  }

//funçoes cnpj
function ValidarCNPJ(ObjCnpj){
    var cnpj = ObjCnpj.value;
    var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
    var dig1= new Number;
    var dig2= new Number;
   
    exp = /\.|\-|\//g
    cnpj = cnpj.toString().replace( exp, "" );
    var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));
           
    for(i = 0; i<valida.length; i++){
            dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0); 
            dig2 += cnpj.charAt(i)*valida[i];      
    }
    dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
    dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
   
    if(((dig1*10)+dig2) != digito) 
            alert('CNPJ Invalido!');
           
}


function txtBoxFormat(strField, sMask, evtKeyPress) {
var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;

if(document.all) { // Internet Explorer
    nTecla = evtKeyPress.keyCode;
}
else if(document.layers) { // Nestcape
    nTecla = evtKeyPress.which;
}
else if(document.getElementById) { // FireFox
    nTecla = evtKeyPress.which;
}

if (nTecla != 8) {

sValue = document.getElementById(strField).value;

// Limpa todos os caracteres de formatação que
// já estiverem no campo.
sValue = sValue.toString().replace( "-", "" );
sValue = sValue.toString().replace( "-", "" );
sValue = sValue.toString().replace( ".", "" );
sValue = sValue.toString().replace( ".", "" );
sValue = sValue.toString().replace( "/", "" );
sValue = sValue.toString().replace( "/", "" );
sValue = sValue.toString().replace( "(", "" );
sValue = sValue.toString().replace( "(", "" );
sValue = sValue.toString().replace( ")", "" );
sValue = sValue.toString().replace( ")", "" );
sValue = sValue.toString().replace( " ", "" );
sValue = sValue.toString().replace( " ", "" );
sValue = sValue.toString().replace( ":", "" );
fldLen = sValue.length;
mskLen = sMask.length;

i = 0;
nCount = 0;
sCod = "";
mskLen = fldLen;

while (i <= mskLen) {
bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))
bolMask = bolMask || (sMask.charAt(i) == ":")

if (bolMask) {
sCod += sMask.charAt(i);
mskLen++; }
else {
sCod += sValue.charAt(nCount);
nCount++;
}

i++;
}

//objForm[strField].value = sCod;
document.getElementById(strField).value = sCod;

if (nTecla != 8) { // backspace
    if (sMask.charAt(i-1) == "9") { // apenas números...
        return ((nTecla > 47) && (nTecla < 58)); } // números de 0 a 9
    else { // qualquer caracter...
        return true;
    }
}
else {
    return true;
}
}
}