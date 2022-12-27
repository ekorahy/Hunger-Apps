import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this.button = button;
    this.drawer = drawer;
    this.hero = hero;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
      hero: this.hero,
      content: this.content,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
