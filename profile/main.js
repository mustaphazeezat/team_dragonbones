
let navEl = document.querySelector('.content'),
    toggler = document.querySelector('.toggle-mobile-nav');
    console.log(toggler)
toggler.addEventListener('click', function () {
    navEl.classList.toggle('is-active')
    this.classList.toggle('is-clicked')
}) 