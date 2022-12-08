class NavBar {
  constructor() {
    this.toggleButton = document.querySelector("#nav_mode_active");
    this.toggleImg = document.querySelector("#main_nav_mode_icon");
    this.navBar = document.querySelector("#main_nav");
    this.input = document.querySelector("#main_inputs_search");
  }
  init() {
    this.toggleButton.addEventListener("click", () => this.changeTheme());
  }
  changeTheme() {
    if (document.body.className === "--light") {
      document.body.className = "--dark";
      this.navBar.classList.add("--dark");
      this.toggleImg.src = "../../images/sunny-outline.svg";
      this.input.classList.add("--dark");
    } else {
      document.body.className = "--light";
      this.navBar.classList.remove("--dark");
      this.toggleImg.src = "../../images/moon-outline.svg";
      this.input.classList.remove("--dark");
    }
  }
}
export const navbar = new NavBar();
navbar.init();
