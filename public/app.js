class TodoStorage {
    constructor() {
        this.storageKey = 'todos';
    }

    getTodos() {
        const todos = localStorage.getItem(this.storageKey);
        return todos ? JSON.parse(todos) : [];
    }

    saveTodos(todos) {
        localStorage.setItem(this.storageKey, JSON.stringify(todos));
    }

    addTodo(todo) {
        const todos = this.getTodos();
        const newTodo = {
            id: Date.now(),
            text: todo,
            completed: false,
            createdAt: new Date().toISOString()
        };
        todos.push(newTodo);
        this.saveTodos(todos);
        return newTodo;
    }

    removeTodo(id) {
        let todos = this.getTodos();
        todos = todos.filter(todo => todo.id !== id);
        this.saveTodos(todos);
    }

    toggleTodo(id) {
        let todos = this.getTodos();
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos(todos);
        }
    }

    clearCompleted() {
        let todos = this.getTodos();
        todos = todos.filter(todo => !todo.completed);
        this.saveTodos(todos);
    }
}

class TodoApp {
    constructor() {
        this.storage = new TodoStorage();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.render();
    }

    cacheElements() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.taskCount = document.getElementById('taskCount');
        this.clearBtn = document.getElementById('clearBtn');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }

    bindEvents() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        
        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        this.storage.addTodo(text);
        this.todoInput.value = '';
        this.render();
    }

    removeTodo(id) {
        this.storage.removeTodo(id);
        this.render();
    }

    toggleTodo(id) {
        this.storage.toggleTodo(id);
        this.render();
    }

    clearCompleted() {
        if (confirm('Are you sure you want to delete all completed tasks?')) {
            this.storage.clearCompleted();
            this.render();
        }
    }

    getFilteredTodos() {
        const todos = this.storage.getTodos();
        
        switch (this.currentFilter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }

    updateStats() {
        const todos = this.storage.getTodos();
        const count = todos.length;
        this.taskCount.textContent = `${count} task${count !== 1 ? 's' : ''}`;
    }

    render() {
        this.todoList.innerHTML = '';
        const filteredTodos = this.getFilteredTodos();

        if (filteredTodos.length === 0) {
            this.todoList.innerHTML = '<div class="empty-state"><p>No tasks yet. Add one to get started!</p></div>';
        } else {
            filteredTodos.forEach(todo => {
                const li = document.createElement('li');
                li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.completed;
                checkbox.addEventListener('change', () => this.toggleTodo(todo.id));

                const span = document.createElement('span');
                span.className = 'todo-text';
                span.textContent = todo.text;

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => this.removeTodo(todo.id));

                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(deleteBtn);
                this.todoList.appendChild(li);
            });
        }

        this.updateStats();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});