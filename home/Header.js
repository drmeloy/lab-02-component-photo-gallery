import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <h1>HEA image gallery!</h1>
                <h2>For your viewing pleasure, provided by the Horn Enthusiasts of America</h2>
            </header>
        `;
    }
}

export default Header;