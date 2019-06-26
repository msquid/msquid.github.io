function toEncrypt(str){
  var arr = getArrayByString(str);
  var encrypted = 0;
  var decryptkey = [];
  var en_and_key = [];
  // x =
  for (i=0; i<arr.length; i++){
    encrypted += arr[i].charCodeAt(0);
  }
  encrypted = (encrypted-Math.floor((i^3)+(((i+1)^2)/i)))*(i^(5^i)) + i^(i^i);
  en_and_key[0] = encrypted;
  en_and_key[1] = i;
  return en_and_key;
}
function getArrayByString(str){
  var returns = [];
  for (i=0; i<str.length; i++){
    returns[i] = str.charAt(str.length-1);
  }
  return returns;
}
