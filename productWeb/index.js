let error = document.getElementById('error');
let success = document.getElementById('success');

window.addEventListener('offline', function(){
    error.style.display = 'block'
    success.style.display = 'none'
})
window.addEventListener('online', function(){
    success.style.display = 'block'
    error.style.display = 'none'
})
