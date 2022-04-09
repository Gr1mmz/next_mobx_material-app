import {makeAutoObservable} from "mobx";
import {Todo} from "../config/types";

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

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    completeTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }
}

export default new Todos();