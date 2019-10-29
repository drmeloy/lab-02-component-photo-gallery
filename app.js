import Component from './Component.js';
import images from './data/images.js';

class App extends Component {

    renderHTML() {
        return /*html*/`    
        <div>    

            <main>
                <div class="filter-bar">
                        
                </div>
                <section class="gallery">
                        
                </section>
            </main>
            <footer>

            </footer>
        </div>
        `;
    }

    onRender(dom) {
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const props = {
            images: images
        };

        

    }
}

export default App;