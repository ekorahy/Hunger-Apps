class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img tabindex="0" src="./logo.png" alt="logo hunger apps">
      <button id="menu" class="header__menu" tabindex="0" aria-label="drawer button">☰</button>
      <nav id="drawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="/">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://www.linkedin.com/in/eko-rahayu-widodo-989416231/">
          About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
