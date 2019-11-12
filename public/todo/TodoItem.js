import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        const completeButton = dom.querySelector('.complete-button');
        completeButton.addEventListener('click', () => {
            //toggle
            todo.complete = !todo.complete;
            onUpdate(todo);
            console.log(todo.complete, 'complete');
        });

        const removeButton = dom.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            const confirmed = confirm('Do you really not want to collect this creature?');
            if (confirmed) {
                onRemove(todo);
            }
        });
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            <li class = "todo-item">
                <span class = "${todo.complete ? 'complete' : ''}">${todo.task}</span>
                <div>
                    <button class = "complete-button">
                        ${todo.complete ? 'Uncollected' : 'Collected'}
                    </button>

                    <button class = "remove-button">
                    🗑
                    </button>
                </div>
            </li>
        `;
    }
}

export default TodoItem;