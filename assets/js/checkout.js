let getData = function (){
    let mail = document.getElementById("mail").value;
    let passw = document.getElementById("passw").value;
    if (mail == ""){
        document.getElementById("mail").focus;
    } else {
        if (passw == ""){
            document.getElementById("passw").focus;
        } else {
            console.log(mail+""+passw);
            document.getElementById("mail").value = "";
            document.getElementById("passw").value = "";
            document.getElementById("mail").focus()
        }
    }
    

}