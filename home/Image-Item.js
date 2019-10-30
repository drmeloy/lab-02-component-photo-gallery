import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/ `
            <figure>
                <p>${image.title}</p>
                    <img src="${image.url}" alt="${image.description}" class="${image.keyword}" />
                <figcaption>${image.description}</figcaption>
            </figure>
        `;
    }
}

export default ImageItem;