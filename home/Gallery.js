import Component from '../Component.js';
import imageItem from './Image-Item.js';

class Gallery extends Component {
    renderHTML() {
        return /*html*/ `
            <div class="image-section">

            </div>
        `;
    }
    onRender(dom){
        const images = this.props.images;

        images.forEach(image => {
            const props = {
                image: image
            };
            const imageItem = new imageItem(props);
            const imageItemDom = imageItem.renderDOM();
            dom.appendChild(imageItemDom);
        });
    }
}

export default Gallery;