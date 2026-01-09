window.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'py-3', 'shadow-sm', 'border-zinc-100');
            navbar.classList.remove('py-4', 'border-transparent');
        } else {
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'py-3', 'shadow-sm', 'border-zinc-100');
            navbar.classList.add('py-4', 'border-transparent');
        }
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // On applique l'observer sur tous les éléments avec la classe .fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        revealOnScroll.observe(el);
    });

    // 3. Petit retour haptique visuel sur le panier
    const cartBtn = document.querySelector('.relative.cursor-pointer');
    const cartCounter = cartBtn.querySelector('span');

    document.querySelectorAll('button').forEach(btn => {
        if (btn.innerText.includes('AJOUTER')) {
            btn.addEventListener('click', () => {
                // Simulation d'ajout au panier
                let count = parseInt(cartCounter.innerText);
                cartCounter.innerText = count + 1;

                // Petite animation sur le compteur
                cartCounter.classList.add('scale-125', 'bg-green-600');
                setTimeout(() => {
                    cartCounter.classList.remove('scale-125', 'bg-green-600');
                }, 300);
            });
        }
    });

});