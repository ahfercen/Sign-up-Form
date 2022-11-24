const pass1 = document.querySelector("#pass");
const pass2 = document.querySelector("#confirm");
const form = document.querySelector("form");

console.log(pass1);
console.log(pass2);
console.log(form);

function checkPass(){
    if(pass1.textContent === pass2.textContent) {
        return true;
    }else{
        console.log(pass1.textContent);
        console.log(pass2.textContent);
    }
}
form.submit(checkPass());
