function generatePassword() {
  const length = 20;
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-";

  let password = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password.push(charset[randomIndex]);
  }

  const finalPassword = password.join("");
  document.getElementById("password").textContent = finalPassword;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(finalPassword);
    document.getElementById("copied").textContent =
      "Password copied to clipboard!";
  };

  document
    .getElementById("password")
    .addEventListener("click", copyToClipboard);
}

generatePassword();
