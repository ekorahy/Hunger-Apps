class TestimonialSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="testimonial">
        <h1 tabindex="0" class="testimonial__label">Testimonial</h1>
        <p tabindex="0" class="testimonial__tagline">what do they say about this app?</p>
        <div class="testimonial__container">
          <div class="testimonial-item">
            <picture>
              <source media="(max-width: 600px)" srcset="./images/testimony1-small.jpg">
              <img tabindex="0" class="testimonial-item__thumbnail"
                src='./images/testimony1-large.jpg' 
                alt="testimonial image 1"></img>
            </picture>
            <h2 tabindex="0" class="testimonial-item__name">Eko Rahayu Widodo</h2>
            <p tabindex="0" class="testimonial-item__profession">- Software Engineer -</p>
            <q tabindex="0" class="testimonial-item__description">I really like Indonesian food and with this hunger apps,
              I can find Indonesian food restaurants with the best quality and affordable prices.</q>
          </div>
          <div class="testimonial-item">
            <picture>
              <source media="(max-width: 600px)" srcset="./images/testimony2-small.jpg">
              <img tabindex="0" class="testimonial-item__thumbnail"
                src='./images/testimony2-large.jpg' 
                alt="testimonial image 2"></img>
            </picture>
            <h2 tabindex="0" class="testimonial-item__name">Ayu Mulyani</h2>
            <p tabindex="0" class="testimonial-item__profession">- Teacher -</p>
            <q tabindex="0" class="testimonial-item__description">This application really helped me to find references
              about the nearest Indonesian food restaurant.</q>
          </div>
          <div class="testimonial-item">
            <picture>
              <source media="(max-width: 600px)" srcset="./images/testimony3-small.jpg">
              <img tabindex="0" class="testimonial-item__thumbnail"
                src='./images/testimony3-large.jpg' 
                alt="testimonial image 3"></img>
            </picture>
            <h2 tabindex="0" class="testimonial-item__name">Charles Mine</h2>
            <p tabindex="0" class="testimonial-item__profession">- Business analyst -</p>
            <q tabindex="0" class="testimonial-item__description">The information conveyed is very accurate regarding
              the restaurant, i like this.</q>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('testimonial-section', TestimonialSection);
