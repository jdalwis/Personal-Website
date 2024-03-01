const terminalText = document.getElementById("terminal-text");
const userInput = document.getElementById("user-input");

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
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
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

let fullText = initialText + welcomeText;
let currentChar = 0;

function typeOutText() {
  if (currentChar < initialText.length + welcomeText.length) {
    terminalText.innerHTML +=
      fullText.charAt(currentChar) === "\n"
        ? "<br>"
        : fullText.charAt(currentChar);
    currentChar++;
    setTimeout(typeOutText, 55);
  } else if (currentChar === initialText.length + welcomeText.length) {
    terminalText.innerHTML += linksHTML;
    fullText += questionText;
    currentChar++;
    setTimeout(typeOutText, 55);
  } else if (currentChar < fullText.length) {
    terminalText.innerHTML +=
      fullText.charAt(currentChar) === "\n"
        ? "<br>"
        : fullText.charAt(currentChar);
    currentChar++;
    setTimeout(typeOutText, 55);
  } else {
    userInput.style.display = "inline-block";
    userInput.focus();
  }
}

userInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const answer = this.value.trim().toUpperCase();
    if (answer === "Y") {
      this.style.display = "none";

      let message = document.createElement("span");
      message.innerHTML = "<br><br>Retrieving relevant data...";
      terminalText.appendChild(message);

      setTimeout(function () {
        let systemResourcesMessage = document.createElement("span");
        systemResourcesMessage.innerHTML = "<br>Allocating system resources...";
        terminalText.appendChild(systemResourcesMessage);
      }, 500);

      setTimeout(function () {
        let vmInitMessage = document.createElement("span");
        vmInitMessage.innerHTML = "<br>Initializing virtual machine...<br>";
        terminalText.appendChild(vmInitMessage);
      }, 1000);

      setTimeout(function () {
        let redirectingMessage = document.createElement("span");
        redirectingMessage.innerHTML = "Redirecting...";
        redirectingMessage.classList.add("blink");
        terminalText.appendChild(redirectingMessage);
      }, 2000);

      setTimeout(function () {
        window.location.href = "terminal.html";
      }, 4000);
    } else if (answer === "N") {
      terminalText.innerHTML +=
        "<br><br>> Thank you for visiting! Have a nice day!";
      this.style.display = "none";
    } else {
      terminalText.innerHTML += "<br> Please enter Y or N:";
      this.value = "";
    }
  }
});

typeOutText();
