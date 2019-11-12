import Component from '../Component.js';

class AddTodo extends Component {

    onRender(form) {
        const onAdd = this.props.onAdd;
        
        form.addEventListener('submit', async event => {
            event.preventDefault();
            
            const formData = new FormData(form);
            
            const todoName = {
                task: formData.get('todo'),
                complete: false
            };

            try {
                await onAdd(todoName);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <form class="todo-form">
                <input name="todo" required>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddTodo;