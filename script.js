window.onload = function () {
  const toggleSwitch = document.getElementById("theme-button");
  const toggleText = document.getElementById("toggle-text");
  const toggleIcon = document.getElementById("toggle-icon");

  const nav = document.getElementById("nav");

  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const image3 = document.getElementById("image3");
  const textBox = document.getElementById("text-box");

  const lightMode = () => {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";

    document.documentElement.setAttribute("data-theme", "light");
    toggleText.textContent = "Light Mode";
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");

    image1.setAttribute("src", "img/undraw_proud_coder_light.svg");
    image2.setAttribute("src", "img/undraw_feeling_proud_light.svg");
    image3.setAttribute("src", "img/undraw_conceptual_idea_light.svg");

    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textBox.style.color = "white";
  };

  const darkMode = () => {
    nav.style.backgroundColor = "rgb(1 1 1 / 50%)";
    textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";

    document.documentElement.setAttribute("data-theme", "dark");
    toggleText.textContent = "Dark Mode";
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");

    image1.setAttribute("src", "img/undraw_proud_coder_dark.svg");
    image2.setAttribute("src", "img/undraw_feeling_proud_dark.svg");
    image3.setAttribute("src", "img/undraw_conceptual_idea_dark.svg");

    textBox.style.color = "black";
  };

  const switchTheme = (event) => {
    const isChecked = event.target.checked;
    isChecked ? darkMode() : lightMode();
  };
  toggleSwitch.addEventListener("change", switchTheme);
};
