import Component from '../Component.js';
import { type } from 'os';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const inactiveButton = dom.querySelector('.inactive-button');
        inactiveButton.addEventListener('click', () => {
            //toggle
            todo.inactive = !todo.inactive;
            onUpdate(todo);
        });

        const removeButton = dom.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            const confirmed = confirm("Do you really not want to collect this creature?");
            if (confirmed) {
                onRemove(todo);
            }
        });
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            <li class = "todo-item">
                <span class = "${todo.inactive ? 'inactive' : ''}">${todo.name}</span>
                <div>
                    <button class = "inactive-button">
                        Make ${todo.inactive ? 'Uncollected' : 'Collected'}
                    </button>

                    <button class = "remove.button">
                    🗑
                    </button>
                </div>
            </li>
        `;
    }
}

export default TodoItem;