function showMessage() {
    const name = "Morgan Vhangani";  // Replace with your boyfriend's name
    const message = `I Love You, ${name}!`;

    const loveMessage = document.getElementById('love-message');
    const image = document.getElementById('bf-pic');
    
    loveMessage.textContent = message;
    loveMessage.style.opacity = 1;
    
    // Show the image
    image.style.display = 'block';
    image.style.opacity = 1;

    // Create flying hearts
    createHearts();
}

// Function to create flying hearts
function createHearts() {
    const heartContainer = document.querySelector('.heart-container');

    // Generate a random number of hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Set random horizontal position (left) and random starting point vertically (top)
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.top = Math.random() * 100 + 'vh'; // Random starting vertical position
        heart.style.animationDelay = Math.random() * 5 + 's'; // Random delay
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed
        
        heartContainer.appendChild(heart);

        // Remove the heart after the animation ends
        setTimeout(() => {
            heart.remove();
        }, 5000); // Matches the animation duration
    }
}
