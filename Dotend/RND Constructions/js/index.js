<script>
    const images = ['./img/TEN.jpg', './img/NINE.jpg', './img/EIGHT.jpg', './img/ONE.jpg', './img/TWO.jpg', './img/THREE.jpeg', './img/FOUR.jpeg', './img/FIVE.jpg']; // Add paths to all your images here

    let currentImageIndex = 0;
    const modalImage = document.getElementById('modalImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevModalBtn = document.getElementById('prevModalBtn');
    const nextModalBtn = document.getElementById('nextModalBtn');
    const modal = new bootstrap.Modal(document.getElementById('imageModal')); // Make sure to adjust this to your modal's ID

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentImageIndex];
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImage.src = images[currentImageIndex];
    });

    function openModalWithImage(index) {
        currentImageIndex = index;
        modalImage.src = images[currentImageIndex];
        modal.show();
    }

    prevModalBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentImageIndex];
    });

    nextModalBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImage.src = images[currentImageIndex];
    });

    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            openModalWithImage(index);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            modalImage.src = images[currentImageIndex];
        } else if (event.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            modalImage.src = images[currentImageIndex];
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
</script>
