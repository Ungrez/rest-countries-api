export const templates = {
  get navBar() {
    const template = document.createElement("template");
    template.innerHTML = `
        <nav id="nav">
            <p id="nav_logo">Where in the world?</p>
            <div id="nav_mode">
                <img />
                <p id="nav_active_mode">Dark Mode</p>
            </div>
        </nav>`;
    return template;
  },
};
