const terminalText = document.getElementById("terminal-text");
const userInput = document.getElementById("user-input");
const fullText =
  "> Welcome to Janith's Terminal. Here you can find Janith's Projects, Certificates, and Blog Posts. Would you like to continue [Y/n]?";
let currentChar = 0;

function typeOutText() {
  if (currentChar < fullText.length) {
    terminalText.textContent += fullText.charAt(currentChar);
    currentChar++;
    setTimeout(typeOutText, 50);
  } else {
    userInput.style.display = "inline-block";
    userInput.focus();
  }
}

userInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const answer = this.value.trim().toUpperCase();
    if (answer === "Y") {
      terminalText.textContent += "\n";
      terminalText.textContent += "\n";
      const successMessage = document.createElement("span");
      successMessage.textContent = "> Success!";
      successMessage.classList.add("success-message", "blink");
      terminalText.appendChild(successMessage);
      this.style.display = "none";

      setTimeout(function () {
        window.location.href = "terminal.html";
      }, 2000);
    } else if (answer === "N") {
      terminalText.textContent +=
        "\n\n> Thank you for visiting! Have a nice day!";
      this.style.display = "none";
    } else {
      terminalText.textContent += "\n> Please enter Y or N:";
      this.value = "";
    }
  }
});

typeOutText();
