const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header__link');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header__item a[href*=' + id + ']').classList.add('active');
            })

            sec.classList.add('showAnimate')
        } else {
            sec.classList.remove('showAnimate')
        }
    })

    // sticky header
    const header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // animation footer in scroll
    const footer = document.querySelector('.footer');

    footer.classList.toggle('showAnimate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}