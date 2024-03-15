
window.onscroll = function() {stickyNavbar()};

// Define the array of words to display
const words = ["nuel", "nuel.dev", "nueldotdev."];

// Get the element where the word will be displayed
const wordDisplay = document.getElementById('wordDisplay');
const mediaContainer = document.getElementById('media-container');

// Function to display words one after another
function displayWords() {
    let wordIndex = 0;
    let letterIndex = 0;

    // Function to display the next letter of the current word
    function displayNextLetter() {
        // Check if all letters of the current word have been displayed
        if (letterIndex === words[wordIndex].length) {
            // Start removing letters for the current word
            setTimeout(removeLetters, 1000); // Delay before removing letters
            return;
        }

        // Display the next letter of the current word
        wordDisplay.textContent += words[wordIndex][letterIndex];
        letterIndex++;

        // Call this function recursively to display the next letter
        setTimeout(displayNextLetter, 200); // Adjust the interval (in milliseconds) to control the speed
    }

    // Function to remove letters of the current word
    function removeLetters() {
        let word = wordDisplay.textContent;
        if (word.length === 0) {
            // Move to the next word or loop back to the first word
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
            setTimeout(displayNextLetter, 1000); // Delay before displaying the next word
            return;
        }
        
        // Remove the last letter from the current word
        wordDisplay.textContent = word.slice(0, -1);
        
        // Call this function recursively to remove the next letter
        setTimeout(removeLetters, 100); // Adjust the interval (in milliseconds) to control the speed
    }

    // Start displaying the first word
    displayNextLetter();
}

// Call the function to start displaying words
displayWords();


// Function to show media for a project
function showMedia(projectId) {
    // Example data - Replace with your actual media URLs
    const media = {
        zimo: [
            "images/projects/zimo/home-page.jpg",
            "images/projects/zimo/dm-chat.jpg",
            "images/projects/zimo/chat-page.jpg",
            "images/projects/zimo/user.jpg"
        ],
        
        spendwise: [
            "images/projects/spendwise/sw-landing.jpg",
            "images/projects/spendwise/sw-home.jpg",
            "images/projects/spendwise/sw-dashboard.jpg",
            "images/projects/spendwise/sw-entries.jpg",
        ],

        memo: [
            "images/projects/memo/memo-sign.jpg",
            "images/projects/memo/memo-screen.jpg",
            "images/projects/memo/memo-note.jpg",
            "images/projects/memo/memo-tasks.jpg",
        ]
    };

    // Get the active media container element
    const activeMediaContainer = document.querySelector('.active-media');

    // Get the media thumbnails container element
    const thumbnailsContainer = document.querySelector('.media-thumbnail .thumbnail-inner');

    // Clear any existing media content
    activeMediaContainer.innerHTML = '';
    thumbnailsContainer.innerHTML = '';
    mediaContainer.classList.add('active');
    // Populate active media for the selected project
    const activeMedia = media[projectId][0]; // Select the first media as active
    const activeMediaImg = document.createElement('img');
    activeMediaImg.src = activeMedia;
    activeMediaContainer.appendChild(activeMediaImg);

    // Populate thumbnails for the selected project
    media[projectId].forEach((mediaUrl, index) => {
        const thumbnailCase = document.createElement('div');
        thumbnailCase.className = 'thumbnail-case';
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = mediaUrl;
        thumbnailImg.classList.add('thumbnail');
        thumbnailImg.onclick = () => setActiveMedia(mediaUrl);
        thumbnailCase.appendChild(thumbnailImg);
        thumbnailsContainer.appendChild(thumbnailCase);
    });

    // Function to set active media
    function setActiveMedia(mediaUrl) {
        activeMediaImg.src = mediaUrl;
    }
}

const cancelBtn = document.querySelector('.cancel-btn');

cancelBtn.addEventListener('click', () => {
    mediaContainer.classList.remove('active');
})


var header = document.getElementById("header");
var banOne = document.querySelector(".banner.one");
var sticky = (banOne.offsetHeight - 0.3 * banOne.offsetHeight) ;

function stickyNavbar() {
    if (window.scrollY >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}