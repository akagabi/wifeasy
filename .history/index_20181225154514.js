document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form');
    var steps = {
        wrapper: document.querySelector('.steps'),
        container: document.querySelectorAll('.steps__container')
    };
    var input = document.querySelector('#value');
    var qrCode = document.getElementById('qrcode'); 

    changeStep(0);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var value = input.value;

        if (!value.length) {
            alert('You need to type something');
            return;
        }

        showQr(value);
    });

    function showQr(value) {
        new QRCode(qrCode, value);
        changeStep(1);
    }

    function changeStep(step) {
        var selected = steps.container[step];
        var bounds = selected.getBoundingClientRect();
        var height = bounds.height;

        steps.wrapper.style.height = height + 'px';

        steps.container.forEach(function(step) {
            step.classList.remove('visible');
        });

        selected.classList.add('visible');
    }
});
