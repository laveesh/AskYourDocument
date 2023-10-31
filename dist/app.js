document.addEventListener("DOMContentLoaded", () => {
    const pdfFileInput = document.getElementById("pdfFileInput");
    const uploadButton = document.getElementById("uploadButton");
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.querySelector(".progress-bar");
    const uploadStatus = document.getElementById("uploadStatus");
    const chatBox = document.getElementById("chatBox");
    const sendMessageButton = document.getElementById("sendMessageButton");
    const processPdfButton = document.getElementById("processPdfButton");
    // Function to add a message to the chat box
    function addMessage(message, sender) {
        const chatMessages = document.getElementById("chatMessages");
        const messageDiv = document.createElement("div");
        messageDiv.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(messageDiv);
    }
    // Event listener for the "Send" button in the chat box
    sendMessageButton.addEventListener("click", () => {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value;
        addMessage(message, "You");
        // You can add code to respond to the user's message here if needed.
        messageInput.value = ""; // Clear the input field after sending.
    });
    // Event listener for the "Process PDF" button
    processPdfButton.addEventListener("click", () => {
        const file = pdfFileInput.files[0];
        if (file) {
            // Simulate PDF processing (you can replace this with actual PDF processing logic)
            const processingInterval = setInterval(() => {
                // Replace this with your PDF processing logic
                // Here, we simulate processing by incrementing a counter and showing progress.
                const progress = parseInt(progressBar.style.width) || 0;
                if (progress < 100) {
                    progressBar.style.width = progress + 10 + "%";
                    addMessage(`Processing... ${progress + 10}%`, "System");
                }
                else {
                    clearInterval(processingInterval);
                    addMessage("Processing complete.", "System");
                }
            }, 500); // Simulating a 500 ms delay for each step.
        }
    });
    uploadButton.addEventListener("click", () => {
        const file = pdfFileInput.files[0];
        if (file) {
            if (file.type === "application/pdf") {
                // Display the uploading state.
                uploadStatus.innerText = "Uploading...";
                progressContainer.style.display = "block"; // Show the progress bar container.
                const progressBar = document.getElementById("progressBar");
                // Simulate an upload delay (you can replace this with actual file upload logic).
                const uploadInterval = setInterval(() => {
                    const currentWidth = parseInt(progressBar.style.width) || 0;
                    if (currentWidth >= 100) {
                        // Upload complete
                        clearInterval(uploadInterval);
                        uploadStatus.innerText = `Uploaded: ${file.name}`;
                        chatBox.style.display = "block"; // Show the chat box after upload.
                    }
                    else {
                        // Increase the progress bar width and update the background color
                        progressBar.style.width = currentWidth + 10 + "%";
                        if (currentWidth < 50) {
                            progressBar.style.backgroundColor = "#28a745"; // Change color for the second half of the progress
                        }
                    }
                }, 500); // Simulating a 500 ms delay for each step.
            }
            else {
                uploadStatus.innerText = "Please select a valid PDF file.";
            }
        }
        else {
            uploadStatus.innerText = "Please choose a PDF file to upload.";
        }
    });
});
