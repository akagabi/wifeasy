document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form');
    var steps = {
        wrapper: document.querySelector('.steps'),
        container: document.querySelectorAll('.steps__container')
    };

    changeStep(0);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });

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
