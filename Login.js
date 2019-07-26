document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginbutton').onclick = function() {
        var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value; 
    if (user == "Ellis" && pass == "asc"){
        alert('Welcome Ellis');
        window.location.href = 'homepage.html';
        localStorage.setItem('username',user);
        localStorage.setItem('password',pass);
    };
        // return false;
    };
});