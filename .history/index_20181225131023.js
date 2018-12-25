document.addEventListener('load', function() {
});

var form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    console.log('ok')
    e.preventDefault();
})