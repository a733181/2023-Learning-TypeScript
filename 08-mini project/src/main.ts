import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<form class="form">
<input type="text" class="input" placeholder="todo">
<button class="btn" type="submit">Add</button>
</form>
<ul class="ul"></ul>
`;

// learning
// ! 判斷非空值運算符
const inputEl = document.querySelector('.input')! as HTMLInputElement;
const formEl = document.querySelector('.form')! as HTMLFormElement;
const ulEl = document.querySelector('.ul')! as HTMLElement;

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const saveTodoLocalStorage = (): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const createTodoElement = (todo: Todo): void => {
  const liEl = document.createElement('li');
  const checkBoxEl = document.createElement('input');
  checkBoxEl.type = 'checkbox';
  checkBoxEl.checked = todo.completed;
  checkBoxEl.addEventListener('change', () => {
    todo.completed = checkBoxEl.checked;
    saveTodoLocalStorage();
  });
  liEl.append(checkBoxEl);
  liEl.append(todo.text);
  ulEl.appendChild(liEl);
};

const getTodosLocalStorage = (): void => {
  const todo = localStorage.getItem('todos');
  if (todo === null) return;
  const todolist = JSON.parse(todo);
  todolist.forEach((item: Todo) => {
    todos.push(item);
    createTodoElement(item);
  });
};
getTodosLocalStorage();

formEl.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();

  const newTodo: Todo = {
    text: inputEl.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodoElement(newTodo);
  saveTodoLocalStorage();
  inputEl.value = '';
});
