const terminalText = document.getElementById("terminal-text");
const userInput = document.getElementById("user-input");

// Function to format the current date and time in the desired format
function getCurrentDateTime() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2); // Ensure two digits
  const seconds = ("0" + date.getSeconds()).slice(-2); // Ensure two digits
  return `Last login: ${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds} on ttys001`;
}

const initialText = getCurrentDateTime();
const welcomeText =
  "\n\nWelcome to Janith’s Terminal. Below are some quick links:";

const linksHTML = `
<div class="terminal-container" ></div>
  <a href="https://www.linkedin.com/in/janithdalwis" target="_blank" class="terminal-link">LinkedIn</a><br>
  <a href="https://medium.com/@janithdalwis" target="_blank" class="terminal-link">Medium</a><br>
  <a href="https://github.com/jdalwis" target="_blank" class="terminal-link">Github</a><br>
  <a href="https://instagram.com/janith.dalwis" target="_blank" class="terminal-link">Instagram</a><br>
</div>
`;
const questionText =
  "\nWould you like to proceed to janithPortfolio.exe? [Y/n]?";

// Initialize fullText with only the initial and welcome texts
let fullText = initialText + welcomeText;
let currentChar = 0;

// Existing code for typing out text and handling user input follows...

function typeOutText() {
  if (currentChar < initialText.length + welcomeText.length) {
    terminalText.innerHTML +=
      fullText.charAt(currentChar) === "\n"
        ? "<br>"
        : fullText.charAt(currentChar);
    currentChar++;
    setTimeout(typeOutText, 55);
  } else if (currentChar === initialText.length + welcomeText.length) {
    // Append the links HTML directly without typing animation
    terminalText.innerHTML += linksHTML;
    // Append the questionText with typing animation
    fullText += questionText; // Update fullText to include questionText for typing
    currentChar++; // Increment to proceed with typing out questionText
    setTimeout(typeOutText, 55); // Continue with the typing animation
  } else if (currentChar < fullText.length) {
    // Continue typing out the questionText
    terminalText.innerHTML +=
      fullText.charAt(currentChar) === "\n"
        ? "<br>"
        : fullText.charAt(currentChar);
    currentChar++;
    setTimeout(typeOutText, 55);
  } else {
    // Once done, display the user input
    userInput.style.display = "inline-block";
    userInput.focus();
  }
}

userInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const answer = this.value.trim().toUpperCase();
    if (answer === "Y") {
      // Hide the input right away
      this.style.display = "none";

      // First message
      let message = document.createElement("span");
      message.innerHTML = "<br><br>Retrieving relevant data...";
      terminalText.appendChild(message);

      // Second message (after 1 second)
      setTimeout(function () {
        let systemResourcesMessage = document.createElement("span");
        systemResourcesMessage.innerHTML = "<br>Allocating system resources...";
        terminalText.appendChild(systemResourcesMessage);
      }, 500); // Adjust timing as needed

      // Third message (after 2 seconds)
      setTimeout(function () {
        let vmInitMessage = document.createElement("span");
        vmInitMessage.innerHTML = "<br>Initializing virtual machine...<br>";
        terminalText.appendChild(vmInitMessage);
      }, 1000); // Adjust timing as needed

      // Fourth message (after 3 seconds)
      setTimeout(function () {
        let redirectingMessage = document.createElement("span");
        redirectingMessage.innerHTML = "Redirecting...";
        redirectingMessage.classList.add("blink"); // Apply the blinking CSS class
        terminalText.appendChild(redirectingMessage);
      }, 2000); // Adjust timing as needed

      // Redirect after the messages (after 5 seconds to allow some time for the blinking message)
      setTimeout(function () {
        window.location.href = "terminal.html"; // Ensure this URL is correct
      }, 4000); // Adjust timing as needed
    } else if (answer === "N") {
      terminalText.innerHTML +=
        "<br><br>> Thank you for visiting! Have a nice day!";
      this.style.display = "none";
    } else {
      terminalText.innerHTML += "<br>> Please enter Y or N:";
      this.value = "";
    }
  }
});

typeOutText();
