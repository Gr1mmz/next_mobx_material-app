import {makeAutoObservable} from "mobx";
import {Todo} from "../config/types";
import {makeLocalStorage} from "./makeLocalStorage";

class Todos {
    todos: Array<Todo> = [
        {"id": 1, "title": "Learn HTML", "completed": true},
        {"id": 2, "title": "Learn CSS", "completed": true},
        {"id": 3, "title": "Learn JavaScript", "completed": true},
        {"id": 4, "title": "Learn React", "completed": true},
        {"id": 5, "title": "Learn Redux", "completed": true},
        {"id": 7, "title": "Learn TypeScript", "completed": false},
        {"id": 8, "title": "Learn MobX", "completed": false},
    ];
    filter: string = "all";

    constructor() {
        makeAutoObservable(this);
    };

    getFilteredTodos(fil: string) {
        switch (fil) {
            case "all":
                return this.todos
            case "active":
                return this.todos.filter(todo => !todo.completed)
            case "completed":
                return this.todos.filter(todo => todo.completed)
        }
    };

    addTodo(todo: Todo) {
        this.todos.push(todo);
        this.getFilteredTodos(this.filter);
    };

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.getFilteredTodos(this.filter);
    };

    completeTodo(todo: Todo) {
        todo.completed = !todo.completed;
        this.getFilteredTodos(this.filter);
    };

    setFilter(f: string) {
        this.filter = f;
        this.getFilteredTodos(this.filter);
    }
}

export default new Todos();