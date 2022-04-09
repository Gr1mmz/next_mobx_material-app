import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import Todos from "../../store/todos";
import TodoItem from "../TodoItem/TodoItem";
import {Box} from "@mui/material";
import {makeLocalStorage} from "../../store/makeLocalStorage";
import ClipLoader from "react-spinners/ClipLoader";

const TodoList = observer(() => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        makeLocalStorage(Todos, "todosStore", ["todos"]);
        setLoading(false);
    }, [])
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em"
        }}>
            {loading
                ? <ClipLoader
                    color={"#2196f3"}
                    loading={loading}
                    size={50}
                    css="margin: 0 auto"
                />
                :Todos.getFilteredTodos(Todos.filter)?.map(todo => <TodoItem todo={todo} key={todo.id}/>)}
        </Box>
    );
})

export default TodoList;