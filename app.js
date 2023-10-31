document.addEventListener("DOMContentLoaded", function () {
    var pdfFileInput = document.getElementById("pdfFileInput");
    var uploadButton = document.getElementById("uploadButton");
    var progressContainer = document.getElementById("progressContainer");
    var progressBar = document.querySelector(".progress-bar");
    var uploadStatus = document.getElementById("uploadStatus");
    var chatBox = document.getElementById("chatBox");
    var sendMessageButton = document.getElementById("sendMessageButton");
    var processPdfButton = document.getElementById("processPdfButton");
    // Function to add a message to the chat box
    function addMessage(message, sender) {
        var chatMessages = document.getElementById("chatMessages");
        var messageDiv = document.createElement("div");
        messageDiv.textContent = "".concat(sender, ": ").concat(message);
        chatMessages.appendChild(messageDiv);
    }
    // Event listener for the "Send" button in the chat box
    sendMessageButton.addEventListener("click", function () {
        var messageInput = document.getElementById("messageInput");
        var message = messageInput.value;
        addMessage(message, "You");
        // You can add code to respond to the user's message here if needed.
        messageInput.value = ""; // Clear the input field after sending.
    });
    // Event listener for the "Process PDF" button
    processPdfButton.addEventListener("click", function () {
        var file = pdfFileInput.files[0];
        if (file) {
            // Simulate PDF processing (you can replace this with actual PDF processing logic)
            var processingInterval_1 = setInterval(function () {
                // Replace this with your PDF processing logic
                // Here, we simulate processing by incrementing a counter and showing progress.
                var progress = parseInt(progressBar.style.width) || 0;
                if (progress < 100) {
                    progressBar.style.width = progress + 10 + "%";
                    addMessage("Processing... ".concat(progress + 10, "%"), "System");
                }
                else {
                    clearInterval(processingInterval_1);
                    addMessage("Processing complete.", "System");
                }
            }, 500); // Simulating a 500 ms delay for each step.
        }
    });
    uploadButton.addEventListener("click", function () {
        var file = pdfFileInput.files[0];
        if (file) {
            if (file.type === "application/pdf") {
                // Display the uploading state.
                uploadStatus.innerText = "Uploading...";
                progressContainer.style.display = "block"; // Show the progress bar container.
                var progressBar_1 = document.getElementById("progressBar");
                // Simulate an upload delay (you can replace this with actual file upload logic).
                var uploadInterval_1 = setInterval(function () {
                    var currentWidth = parseInt(progressBar_1.style.width) || 0;
                    if (currentWidth >= 100) {
                        // Upload complete
                        clearInterval(uploadInterval_1);
                        uploadStatus.innerText = "Uploaded: ".concat(file.name);
                        chatBox.style.display = "block"; // Show the chat box after upload.
                    }
                    else {
                        // Increase the progress bar width and update the background color
                        progressBar_1.style.width = currentWidth + 10 + "%";
                        if (currentWidth < 50) {
                            progressBar_1.style.backgroundColor = "#28a745"; // Change color for the second half of the progress
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
