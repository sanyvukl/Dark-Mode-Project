window.onload = function () {
  const MODE_TYPES = {
    LIGHT_MODE: "LIGHT_MODE",
    DARK_MODE: "DARK_MODE",
  };

  const { documentElement } = document;
  const toggleSwitch = document.getElementById("theme-button");
  const toggleText = document.getElementById("toggle-text");
  const toggleIcon = document.getElementById("toggle-icon");

  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const image3 = document.getElementById("image3");

  const imageMode = (mode) => {
    if (mode === MODE_TYPES.LIGHT_MODE) {
      image1.setAttribute("src", "img/undraw_proud_coder_light.svg");
      image2.setAttribute("src", "img/undraw_feeling_proud_light.svg");
      image3.setAttribute("src", "img/undraw_conceptual_idea_light.svg");
      return;
    }
    if (mode === MODE_TYPES.DARK_MODE) {
      image1.setAttribute("src", "img/undraw_proud_coder_dark.svg");
      image2.setAttribute("src", "img/undraw_feeling_proud_dark.svg");
      image3.setAttribute("src", "img/undraw_conceptual_idea_dark.svg");
      return;
    }
  };
  const lightMode = () => {
    documentElement.setAttribute("data-theme", "light");
    toggleText.textContent = "Light Mode";
    toggleIcon.classList.replace("fa-moon", "fa-sun");

    imageMode(MODE_TYPES.LIGHT_MODE);
  };
  const darkMode = () => {
    documentElement.setAttribute("data-theme", "dark");
    toggleText.textContent = "Dark Mode";
    toggleIcon.classList.replace("fa-sun", "fa-moon");

    imageMode(MODE_TYPES.DARK_MODE);
  };

  const switchTheme = (event) => {
    const isChecked = event.target.checked;
    isChecked ? darkMode() : lightMode();
  };
  toggleSwitch.addEventListener("change", switchTheme);
};
