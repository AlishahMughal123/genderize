function loadDoc(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById("result").innerHTML = this.responseText;
    }
    
    let nameInput = document.getElementsByName('name')[0].value;
    xhttp.open("GET", `https://api.genderize.io?name=${nameInput}`);
    xhttp.send();
}