// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//For Index.cshtml
document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            changeSlide(-1);
        });

        nextButton.addEventListener('click', () => {
            changeSlide(1);
        });
    }

    function changeSlide(n) {
        const slides = document.getElementsByClassName('slide');
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    }
});



//For Calculate.cshtml
$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = $('#hours').val();
        var rate = $('#rate').val();

        if (hours > 0) {
            var total = hours * rate;
            $('#total').val(total);
        } else {
            alert("Please enter a positive number of hours.");
        }
    });
});

