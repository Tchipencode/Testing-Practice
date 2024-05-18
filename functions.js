
function analyzeArray(arr){
   let sum=0;
   let min=arr[0];
   let max=arr[0];
   for(let item of arr){
      sum+=item;
      min =Math.min(min, item);
      max =Math.max(max, item); 
   }
   const average=sum/arr.length;
   const length=arr.length;
   return{average, min, max, length};

}

const calculator={

   add:function(a, b){
      return a+b;

   },
   subtract:function(a, b){
      return a-b;
   },
   divide:function(a, b){
      return a/b;
   },
   multiply:function(a, b){
      return a*b;
   }
}

function capitalize(str){
   return str.charAt(0).toUpperCase()+str.slice(1);
}
function caesarCipher(str, s){
   let result="";
   const alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const shiftAmount=s%26;
   for (let i=0; i<str.length; i++){
      const char=str[i];
      const charCode=char.charCodeAt(0);

      if(/[a-zA-Z]/.test(char)){
         const baseIndex=char.toLowerCase()===char?0:26;
         const newIndex=(charCode-baseIndex+shiftAmount)%26+baseIndex;
         const newChar=alphabet[newIndex+baseIndex];
         result+=newChar;
         // const ch=String.fromCharCode((charCode+s-65)%26+65);
         // result+=ch;
      } else{
         // const ch=String.fromCharCode((charCode+s-97)%26+97);
         // result+=ch;
         result+=char
      }
   }
   return result;
}
export {analyzeArray, calculator,capitalize, caesarCipher};