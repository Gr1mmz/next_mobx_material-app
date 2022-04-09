import React from "react";
import {Todo} from "../../config/types";
import {Card, CardContent, Button, Typography, Checkbox} from "@mui/material";
import Todos from "../../store/todos";
import {observer} from "mobx-react-lite";

interface ITodoItem {
    todo: Todo
}

const TodoItem: React.FC<ITodoItem> = observer(({todo}) => {
    return (
        <Card sx={{
            minWidth: 275,
        }}>
            <CardContent sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1em",
                padding: "0.5em 2em",
                "&:last-child": {
                    paddingBottom: "0.5em"
                }
            }}>
                <Checkbox checked={todo.completed} onChange={() => Todos.completeTodo(todo)}/>
                <Typography sx={{ fontSize: 14 }}>
                    {todo.title}
                </Typography>
                <Button size="small" onClick={() => Todos.removeTodo(todo.id)}>Delete</Button>
            </CardContent>
        </Card>
    );
})

export default TodoItem;