// Function to generate an image using OpenAI's DALL·E
async function generateImage(description) {
    if (!description) {
        alert("Please enter a description for the image.");
        console.log(0);
        return;
    }
 const generated_image_container = document.getElementById('generated-image');
    generated_image_container.innerHTML = "Generating image...";console.log(1);

    const randomSeed = Math.floor(Math.random() * 1000000000);
    const height = 720;
    const width = 1000;
    const imageUrl = `Ai image generator Url with required parameters`;
    console.log("URL: " + imageUrl);

    // Ensure there is an image element within the container
    let image = generated_image_container.querySelector('img');
    if (!image) {
        image = document.createElement('img');
        generated_image_container.appendChild(image);  // Append image first
    }

    // Set the generated image URL
    image.src = imageUrl;
    image.alt = description;

    // Display the image correctly
    image.style.display = "block";

    // Clear any previous content after appending the new image
    generated_image_container.innerHTML = ''; 
    generated_image_container.appendChild(image); // Append the newly generated image


    // try {
    //     const response = await fetch('https://api.openai.com/v1/images/generations', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer YOUR_OPENAI_API_KEY`
    //         }, 
    //         body: JSON.stringify({
    //             prompt: description,
    //             n: 1,
    //             size: '1024x1024'
    //         })
    //     });

    //     const data = await response.json();
    //     if (data && data.data && data.data[0] && data.data[0].url) {
    //         document.getElementById('generated-image').innerHTML = `<img src="${data.data[0].url}" alt="Generated Image">`;
    //     } else {
    //         document.getElementById('generated-image').innerHTML = "Failed to generate image.";
    //     }
    // } catch (error) {
    //     console.error("Error generating image:", error);
    //     document.getElementById('generated-image').innerHTML = "An error occurred while generating the image.";
    // }
}

/*
                chatgpt api code for genearting is here 


// Function to generate code using OpenAI's GPT
async function generateCode(description) {
    if (!description || description.trim() === "") {
        alert("Please enter a description for the code.");
        return;
    }

    // Show a loading indicator
    document.getElementById('generated-code').innerHTML = "Generating code...";

    try {
        // Send the API request
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer API Here`  // Never expose the API key here in real code (security risk)
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",  // Use a newer model like GPT-3.5 or GPT-4
                prompt: description,
                max_tokens: 50,  // Increased token limit for larger response
                temperature: 0.7,  // Adjust for creativity
            })
        });

        const data = await response.json();
        console.log(data);  // Logs the full response to understand what's returned from the API

        // Handle successful response
        if (data && data.choices && data.choices[0] && data.choices[0].text) {
            document.getElementById('generated-code').textContent = data.choices[0].text.trim();
            console.log("Generated Code:", data.choices[0].text.trim());
        } else {
            document.getElementById('generated-code').textContent = "Failed to generate code.";
        }

    } catch (error) {
        console.error("Error generating code:", error);
        
        // Check for quota issue
        if (error.response && error.response.data && error.response.data.error && error.response.data.error.code === "insufficient_quota") {
            document.getElementById('generated-code').textContent = "Your usage quota has been exceeded. Please check your billing or wait for the next cycle.";
        } else {
            document.getElementById('generated-code').textContent = "An error occurred while generating the code.";
        }
    }
}
*/


/*   gemini api key for code generation*?/*/
async function generateCode(description) {
    if (!description || description.trim() === "") {
        alert("Please enter a description for the code.");
        return;
    }
    document.getElementById('generated-code').innerHTML = "Generating code...";
    let user = {
        message: `A single program for the demonstrating ${description}`,
        file: { mime_type: null, data: null }
    };
    let RequestOption = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "contents": [
                {
                    "parts": [
                        { text: user.message },
                        (user.file.data ? [{ inline_data: user.file }] : [])
                    ]
                }
            ]
        })
    };

    try {
        // Send the API request
        let response = await fetch('The API Key goes here', RequestOption);
        
        // Parse the response
        let data = await response.json();
        
        // Extract the AI's response and update the UI
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        
        // Display the generated code in the UI
        document.getElementById('generated-code').textContent = apiResponse;
        console.log("Generated Code:", apiResponse);
    } catch (error) {
        console.error("Error generating code:", error);
        
        document.getElementById('generated-code').textContent = "An error occurred while generating the code.";
    }
}


// // Function to summarize text using OpenAI's GPT
// async function summarizeText(text) {
//     if (!text) {
//         alert("Please enter text to summarize.");
//         return;
//     }

//     // Show a loading indicator
//     document.getElementById('summarized-text').innerText = "Summarizing text...";

//     try {
//         const response = await fetch('https://api.openai.com/v1/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer YOUR_OPENAI_API_KEY`
//             },
//             body: JSON.stringify({
//                 model: "text-davinci-003",
//                 prompt: `Summarize the following text: ${text}`,
//                 max_tokens: 100
//             })
//         });

//         const data = await response.json();
//         if (data && data.choices && data.choices[0] && data.choices[0].text) {
//             document.getElementById('summarized-text').innerText = data.choices[0].text.trim();
//         } else {
//             document.getElementById('summarized-text').innerText = "Failed to summarize text.";
//         }
//     } catch (error) {
//         console.error("Error summarizing text:", error);
//         document.getElementById('summarized-text').innerText = "An error occurred while summarizing the text.";
//     }
// }






/*SUMMARIZER USING GOOGLE GEMINI API FOR GOOGLE FOR DEVELOPERS INTEGRATION FOR JS BY PRALHAD*/ 

async function summarizeText(text) {
    if (!text) {
        alert("Please enter text to summarize.");
        return;
    }
    document.getElementById('summarized-text').innerText = "Summarizing text...";
    let user = {
        message: text,
        file: { mime_type: null, data: null }
    };
    let RequestOption = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "contents": [
                {
                    "parts": [
                        { text: `Summarize the following text: ${user.message}` }
                    ]
                }
            ]
        })
    };

    try {
        let response = await fetch('The API Key goes here', RequestOption);
        let data = await response.json();
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        document.getElementById('summarized-text').innerText = apiResponse;
    } catch (error) {
        console.error("Error summarizing text:", error);
        document.getElementById('summarized-text').innerText = "An error occurred while summarizing the text.";
    }
}

// Function to explain a topic using OpenAI's GPT
// async function explainTopic(topic) {
//     if (!topic) {
//         alert("Please enter a topic to explain.");
//         return;
//     }

//     // Show a loading indicator
//     document.getElementById('explanation-text').innerText = "Explaining topic...";

//     try {
//         const response = await fetch('https://api.openai.com/v1/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer YOUR_OPENAI_API_KEY`
//             },
//             body: JSON.stringify({
//                 model: "text-davinci-003",
//                 prompt: `Explain the topic: ${topic}`,
//                 max_tokens: 150
//             })
//         });

//         const data = await response.json();
//         if (data && data.choices && data.choices[0] && data.choices[0].text) {
//             document.getElementById('explanation-text').innerText = data.choices[0].text.trim();
//         } else {
//             document.getElementById('explanation-text').innerText = "Failed to explain topic.";
//         }
//     } catch (error) {
//         console.error("Error explaining topic:", error);
//         document.getElementById('explanation-text').innerText = "An error occurred while explaining the topic.";
//     }
// }



/*   EXPLAIN TOPIC BY USING GOOGLE FOR DEVELOPERS - GEMINI API KEY FOR BY GOOGLE */

async function explainTopic(topic) {
    if (!topic) {
        alert("Please enter a topic to explain.");
        return;
    }
    document.getElementById('explanation-text').innerText = "Explaining topic...";
 // Prepare the user message for the API request
    let user = {
        message:topic,
        file: { mime_type: null, data: null }
    };  // Define the API request options
    let RequestOption = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "contents": [
                {
                    "parts": [
                        { text: `Explain the topic: ${user.message}` }
                    ]
                }
            ]
        })
    };

    try {
        // Send the request to Gemini API
        let response = await fetch('The API Key goes here', RequestOption);
        
        // Parse the response
        let data = await response.json();
        
        // Extract the explanation text from the API response
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        
        // Display the explanation text
        document.getElementById('explanation-text').innerText = apiResponse;
    } catch (error) {
        console.error("Error explaining topic:", error);
        
        // Handle errors
        document.getElementById('explanation-text').innerText = "An error occurred while explaining the topic.";
    }
}
