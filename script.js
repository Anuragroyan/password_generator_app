let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers  = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input', ()=>{
     sliderValue.textContent=inputSlider.value;
})

genBtn.addEventListener('click', ()=>{
     passBox.value = generatePassword();
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let AllNumbers = "0123456789";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let AllSymbols = "~!@#$%^&*";

generatePassword = () => {
     let genPassword = "";
     let allChars = "";
     allChars += lowercase.checked ? lowerChars : "";
     allChars += uppercase.checked ? upperChars : "";
     allChars += numbers.checked ? AllNumbers : "";
     allChars += symbols.checked ? AllSymbols : "";
     let i=1;
     while(i<=inputSlider.value){
          genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
          i++;
     }
     return genPassword;
}

copyIcon.addEventListener('click', ()=>{
     if(passBox.value!="" || passBox.value.length >=1){
         navigator.clipboard.writeText(passBox.value);
         copyIcon.innerText="check";
         copyIcon.title="Password Copied";
         setTimeout(()=>{
           copyIcon.innerHTML="context_copy";
           copyIcon.title="";
         },2000);
     }
})