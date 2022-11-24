const pass1 = document.querySelector("#pass");
const pass2 = document.querySelector("#confirm");
const form = document.querySelector("form");


function checkPass(){
    if(pass1.value === pass2.value) {
        return true;
    }else{
        return false;
    }
}
addEventListener('submit',(evt) => {
        if(checkPass()){
            console.log("paased");
        }else{
            evt.preventDefault();
        }
});

