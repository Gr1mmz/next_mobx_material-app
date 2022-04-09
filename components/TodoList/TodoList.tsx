import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import Todos from "../../store/todos";
import TodoItem from "../TodoItem/TodoItem";
import {Box} from "@mui/material";
import {makeLocalStorage} from "../../store/makeLocalStorage";

const TodoList = observer(() => {
    useEffect(() => {
        makeLocalStorage(Todos, "todosStore", ["todos"]);
    }, [])
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em"
        }}>
            {Todos.getFilteredTodos(Todos.filter)?.map(todo => <TodoItem todo={todo} key={todo.id}/>)}
        </Box>
    );
})

export default TodoList;