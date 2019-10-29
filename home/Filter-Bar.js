import Component from '../Component.js';

class FilterBar extends Component {
    renderHTML() {
        return /*html*/`
            <div class="filter-bar">
                <label for="type-select">Filter by type:</label>
                <select name="type-filter" class="type-select">
                    <option value="">ALL</option>
                    <option value="narwhal">Narwhal</option>
                    <option value="rhino">Rhino</option>
                    <option value="unicorn">Unicorn</option>
                    <option value="unilego">Unilego</option>
                    <option value="triceratops">Triceratops</option>
                    <option value="markhor">Markhor</option>
                    <option value="mouflon">Mouflon</option>
                    <option value="addax">Addax</option>
                    <option value="chameleon">Chameleon</option>
                    <option value="lizard">Lizard</option>
                    <option value="dragon">Dragon</option>
                </select>
            </div>
        `;
    }

    onRender(select) {
        const filter = this.props.filter;

        select.addEventListener('change', () => {
            filter(select.value);
        });
    }
}

export default FilterBar;