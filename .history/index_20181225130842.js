document.addEventListener('load', function() {
    var form = document.querySelector('.form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('fala bicha')
    })
});