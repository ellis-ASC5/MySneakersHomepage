// document.getElementById('a').onclick = function() {
//     window.location.href = 'homepage.html';
    
//     return false;
// }

const btn = document.querySelector('#home');

btn.addEventListener('click', function(){
    window.location.href = 'homepage.html';
    
    return false; 
})