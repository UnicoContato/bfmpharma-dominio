document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('main-header');
    const headerLinks = header.querySelectorAll('a:not(.bg-green-500)');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('-translate-y-full');
        } else {
            header.classList.remove('-translate-y-full');
        }

        if (currentScrollY > 50) {
            header.classList.remove('bg-transparent', 'text-white');
            header.classList.add('bg-white', 'text-gray-800', 'shadow-md');
            headerLinks.forEach(link => link.classList.remove('text-white'));
            headerLinks.forEach(link => link.classList.add('text-gray-800'));
        } else {
            header.classList.add('bg-transparent', 'text-white');
            header.classList.remove('bg-white', 'text-gray-800', 'shadow-md');
            headerLinks.forEach(link => link.classList.add('text-white'));
            headerLinks.forEach(link => link.classList.remove('text-gray-800'));
        }

        lastScrollY = currentScrollY;
    });

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const modal = document.getElementById('privacy-modal');
    const openModalBtn = document.getElementById('privacy-btn');
    const closeModalBtn = document.getElementById('close-modal');

    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

});