import Component from '../Component.js';

class AddTodo extends Component {

    onRender(form) {
        const onAdd = this.props.onAdd;
        const todoForm = form.querySelector('form');
        const input = form.querySelector('input[name=todo]');
        
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const todoName = {
                name: input.value
            }

            try {
                await onAdd(todoName);
                // this only runs if no error:
                todoForm.reset();
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
            <form class="type-form">
                <input name="type" required>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddTodo;