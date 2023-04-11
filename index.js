let decryptedPhrase="";
let encryptPhrase="";
const chartInput=document.getElementById("chartInput");
const chartOutput=document.getElementById("chartOutput");
const messageBox=document.getElementById("messageBox");

function encrypt(){
    if(validation()){
        decryptedPhrase=chartInput.value;
        encryptPhrase = decryptedPhrase.replace(/([aeiou])/g, (match, vowel) => {
            switch (vowel) {
              case 'a': return 'ai';
              case 'e': return 'enter';
              case 'i': return 'imes';
              case 'o': return 'ober';
              case 'u': return 'ufat';
              default: return vowel;
            }
        });
        chartOutput.value=encryptPhrase;
    }
    else{
        message()
    }
}

function decrypt(){
    if(validation()){
        encryptPhrase = chartInput.value;
        decryptedPhrase = encryptPhrase.replace(/(ai|enter|imes|ober|ufat)/g, (match, group) => {
            switch (group) {
                case 'ai': return 'a';
                case 'enter': return 'e';
                case 'imes': return 'i';
                case 'ober': return 'o';
                case 'ufat': return 'u';
                default: return group;
            }
        }); 
        chartOutput.value = decryptedPhrase;
    }

}
/* copy to chart output to input */
function copy(){
    chartInput.value=chartOutput.value;
}

function validation(){
    let result=chartInput.value
    if(result.match(/[^a-zñ\s]/g) || chartInput.value=="") return false
    else return true
}

function message(){
    messageBox.hidden=false;
    setTimeout(()=>{
        messageBox.hidden=true;
    },3000)
}