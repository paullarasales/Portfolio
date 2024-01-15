document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add
                ('scroll-reveal');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    })
})