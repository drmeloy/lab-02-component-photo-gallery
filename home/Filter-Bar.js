import Component from '../Component.js';
import images from '../data/images.js';

class FilterBar extends Component {
    renderHTML() {
        return /*html*/`
            <div class="filter-bar">
                <label for="type-select">Filter by type:</label>
                <select name="type-filter" class="type-select">

                </select>
            </div>
        `;
    }

    onRender(dom) {
        const filterFunc = this.props.filterFunc;

        const select = dom.querySelector('.type-select');

        select.addEventListener('change', () => {
            filterFunc(select.value);
        });

        const blankOption = document.createElement('option');
        blankOption.value = '';
        blankOption.textContent = 'ALL';
        select.appendChild(blankOption);

        const removeDupes = (arr, prop) => {
            return arr.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
            });
        };

        const filteredImages = removeDupes(images, 'keyword');        

        filteredImages.forEach(image => {
            const capitalize = (string) => {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
            const key = image.keyword;

            const option = document.createElement('option');
            option.value = key;
            option.textContent = capitalize(key);
            select.appendChild(option);
        });
    }
}

export default FilterBar;