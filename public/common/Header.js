import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Collectable Creatures';

        return /*html*/`
            <header>
                <img class="logo" src="assets/unico.png" alt="Mama Vi's Creatures Logo">
                <h1>${title}</h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="./todo.html">Collectable Creatures</a>
                </nav>
            </header>
        `;
    }
}

export default Header;