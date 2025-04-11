document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const galleryScroller = document.querySelector('.gallery-items');
    
    let currentIndex = 0;
    
    function updateGallery() {
        // Update main image
        galleryItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        
        // Update thumbnails
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentIndex);
        });
        
        // Scroll to current image
        galleryScroller.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Thumbnail click handler
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentIndex = index;
            updateGallery();
        });
    });
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        updateGallery();
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });
    
    // Initialize
    updateGallery();
});