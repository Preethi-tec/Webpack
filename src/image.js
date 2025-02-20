import AppleImage from './apple.jpg'; // Import the image

function addimage() {
    const img = document.createElement('img');
    img.src = AppleImage; // Set the source of the image
    const body = document.querySelector('body');
    body.append(img); // Append the image to the body
}

export default addimage; // Export the addimage function
