// document.getElementById('a').onclick = function() {
//     window.location.href = 'homepage.html';
    
//     return false;
// }

const btn = document.querySelector('#home');

btn.addEventListener('click', function(){
    window.location.href = 'homepage.html';
    
    return false; 
})


let usr;

firebase.auth().onAuthStateChanged(function(user){
    usr= user;
    if (user){
        console.log(user.uid);
    }
})

       
