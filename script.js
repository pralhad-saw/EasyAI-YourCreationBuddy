
window.onload = () => {
    document.body.classList.add('loaded');
};
// // Function to navigate to the specific tool based on the button click
// function navigateToFeature(featureId) {
//     alert("You clicked on: " + featureId); // Placeholder for now, we will later implement the tool for each feature
// }

// // Adding event listeners to feature buttons
// document.getElementById("imageGenerator").querySelector(".feature-btn").addEventListener("click", function() {
//     navigateToFeature("Image Generator");
// });

// document.getElementById("codeGenerator").querySelector(".feature-btn").addEventListener("click", function() {
//     navigateToFeature("Code Generator");
// });

// document.getElementById("textSummarizer").querySelector(".feature-btn").addEventListener("click", function() {
//     navigateToFeature("Text Summarizer");
// });

// document.getElementById("topicExplainer").querySelector(".feature-btn").addEventListener("click", function() {
//     navigateToFeature("Topic Explainer");
// });

// // For the "Get Started" button (maybe a home page redirect or other functionality)
// document.getElementById("getStartedBtn").addEventListener("click", function() {
//     alert("Welcome to SaralAI! Choose an option to get started.");
// });

// // Explanation:
// // Function navigateToFeature(): This is a placeholder for now. When the user clicks on any of the feature buttons, this function will display an alert. Later, we will implement the actual tool functionality.
// // Event Listeners: We attach event listeners to the buttons for the four features. When clicked, each button will trigger the navigateToFeature() function and show a specific feature name for now (this is a placeholder for future work).
// // Step 3: Adding Basic CSS Styling
// // Let’s now focus on the basic styling for this page. Create a styles.css file. We’ll start simple and leave room for you to enhance it later.
// // css




// Function to handle navigation and display alerts when a feature is clicked
function navigateToFeature(featureId) {
     // Hide all tool sections initially
     document.querySelectorAll('.tool-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected tool section
    const sectionId = `#${featureId.toLowerCase().replace(' ', '-')}-section`;
    document.querySelector(sectionId).style.display = 'block';
    switch (featureId) {
        
        case 'Image Generator':
            alert('You clicked on the Image Generator!');
            // Here you will later integrate the image generation tool.
            break;
        case 'Code Generator':
            alert('You clicked on the Code Generator!');
            // Later integrate the code generation tool.
            break;
        case 'Text Summarizer':
            alert('You clicked on the Text Summarizer!');
            // Later integrate the text summarization tool.
            break;
        case 'Topic Explainer':
            alert('You clicked on the Topic Explainer!');
            // Later integrate the topic explainer tool.
            break;
        default:
            console.log('Feature not found!');
    }
}
document.getElementById('imageGenerator').querySelector('.feature-btn').addEventListener('click', function() {
    navigateToFeature('Image Generator');
});

document.getElementById('codeGenerator').querySelector('.feature-btn').addEventListener('click', function() {
    navigateToFeature('Code Generator');
});

document.getElementById('textSummarizer').querySelector('.feature-btn').addEventListener('click', function() {
    navigateToFeature('Text Summarizer');
});

document.getElementById('topicExplainer').querySelector('.feature-btn').addEventListener('click', function() {
    navigateToFeature('Topic Explainer');
});
// "Get Started" button functionality
document.getElementById('getStartedBtn').addEventListener('click', function() {
    alert('Welcome to SaralAI! Choose an option to get started.');
});
function generate_Image() {
        
        const description = document.getElementById('image-description').value.trim();  // Using .trim() to remove extra spaces
        console.log("Image Description: ", description);
        if (!description) {
            alert("Please enter a description for the image.");
            return;
        }
        generateImage(description);  // Calls the function from openaiintegration.js
   
      // Calls the function from openaiintegration.js
}

function generate_Code() {
    const description = document.getElementById('code-description').value.trim();
    // Placeholder for now: show the code description entered
    // document.getElementById('generated-code').textContent = `Generated code for: ${description}`;
    console.log("Image Description: ", description);
    if (!description) {
        alert("Please enter a description for the image.");
        return;
    }
    generateCode(description);  // Calls the function from openaiintegration.js
}

function summarize_Text() {
    const text = document.getElementById('text-to-summarize').value;
    // Placeholder for now: show the text entered
    // 
    summarizeText(text);  // Calls the function from openaiintegration.js
}

function explain_Topic() {
    const topic = document.getElementById('topic-description').value;
    // Placeholder for now: show the topic entered
    // document.getElementById('explanation-text').innerText = `Explanation for topic: ${topic}`;
    explainTopic(topic);  // Calls the function from openaiintegration.js
}
// Explanation:
// navigateToFeature() function:
// This function takes a featureId (like 'Image Generator') and displays an alert message to simulate what will happen when the user clicks on a feature.
// You’ll replace the alert() with the actual functionality for each tool (image generation, code generation, summarizing text, and topic explanations) as you implement those features.
// Event Listeners for Feature Buttons:
// For each of the four features (Image Generator, Code Generator, Text Summarizer, and Topic Explainer), we're adding an event listener to the button (.feature-btn).
// When the button is clicked, the corresponding feature name is passed to the navigateToFeature() function, and the alert is displayed.
// "Get Started" Button:
// The Get Started button triggers a simple welcome message to let users know they can select a feature.
// Step 2: Test the Script
// Open your HTML file in a browser.
// When you click on any of the feature buttons (like "Create an Image", "Generate Code", etc.), it should show an alert message indicating which feature was clicked.
// Clicking on "Get Started" will show a welcome message.
// Step 3: Expand Functionality (Placeholder for Future Integration)
// Right now, we’re only displaying alerts for each button click, but later on, you’ll want to replace these with actual tool functionalities. Here’s a brief outline of what you can do in the future:
// Image Generator:
// You can use an API like DALL·E or Stable Diffusion to generate images based on user input (descriptions).
// Later, you’ll add an input field for users to type their description and a button to generate the image.
// Code Generator:
// You can integrate OpenAI’s GPT API to generate code snippets based on user queries.
// The user will enter a description, and you will show the generated code in a text area or code editor.
// Text Summarizer:
// You can integrate an API like OpenAI’s GPT or Hugging Face Transformers to summarize long texts into shorter versions.
// You can implement a large text area for input and display the summarized output after processing.
// Topic Explainer:
// Use a knowledge base or another GPT-powered API to explain various topics clearly and concisely.
// The user will enter a topic, and you will display a simple explanation.
// Next Steps:
// Build out the image generation and other tools by integrating APIs or custom models.
// Add input forms (e.g., text boxes) where users can provide their own input for each tool (e.g., a text input for image description or code generation request).
// Styling: As you mentioned, later you’ll style the interface to make it look more attractive and engaging.
// Let me know if you'd like assistance with any specific feature, such as integrating an AI API or creating the input forms for these tools!




// ChatGPT can make mistakes. Check important info.
// ?
