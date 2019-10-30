import Component from '../Component.js';
import Header from './Header.js';
import FilterBar from './Filter-Bar.js';
import Gallery from './Gallery.js';
import Footer from './Footer.js';
import images from '../data/images.js';

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
        const props = {
            images: images
        };

        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const gallery = new Gallery(props);
        const galleryDom = gallery.renderDOM();
        const gallerySection = dom.querySelector('.gallery');
        gallerySection.appendChild(galleryDom);

        const filterBarProps = ({
            images: images,
            filterFunc: (filterValue) => {
                let filteredImages;
            
                if (!filterValue){
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === filterValue;
                    });
                }

                const updateProps = {
                    images: filteredImages
                };

                gallery.update(updateProps);
            }
        });

        const filterBar = new FilterBar(filterBarProps);
        const filterBarDom = filterBar.renderDOM();
        const filterSection = dom.querySelector('.filter-bar');
        filterSection.appendChild(filterBarDom);

        const footer = new Footer();
        const footerDom = footer.renderDOM();
        const footerSection = dom.querySelector('footer');
        footerSection.appendChild(footerDom);
    }
}

export default App;