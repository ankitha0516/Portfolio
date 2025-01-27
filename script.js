document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my Portfolio");
});

const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };
  
  document.body.insertAdjacentHTML("afterbegin", <button id="themeToggle">Toggle Theme</button>);
  
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);