class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title" tabindex="0">True taste of Indonesian restaurant.</h1>
            <p class="hero__tagline" tabindex="0">find restaurants with <span class="tagline__color">the best quality</span> 
              and <span class="tagline__color">affordable prices</span> around you.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
