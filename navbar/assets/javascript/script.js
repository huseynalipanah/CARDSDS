
// let navButton = document.querySelector('.navbtn button');
// let closeButton = document.querySelector('.close');
// let navbar = document.querySelector('.navbar');

// navButton.addEventListener('click', function() {
//     navbar.classList.add('open'); 
// });


// closeButton.addEventListener('click', function() {
//     navbar.classList.remove('open'); 
// });
document.querySelectorAll('.card div button').forEach(button => {
    button.addEventListener('click', event => {
        event.target.nextElementSibling.style.filter = 'none';
    });
});
