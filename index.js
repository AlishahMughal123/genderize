const xhttp = new XMLHttpRequest;

xhttp.onload = function() {
    document.getElementById("test").innerHTML = this.response.Text;
}

xhttp.open("GET", "https://api.genderize.io?name=luc");
xhttp.send();
