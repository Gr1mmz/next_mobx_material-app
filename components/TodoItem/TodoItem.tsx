import React from "react";
import {Todo} from "../../config/types";
import {Card, CardContent, Button, Typography, Checkbox} from "@mui/material";
import Todos from "../../store/todos";
import {observer} from "mobx-react-lite";
import { green, grey } from '@mui/material/colors';

interface ITodoItem {
    todo: Todo
}

const TodoItem: React.FC<ITodoItem> = observer(({todo}) => {
    const cardBgColor = todo.completed ? green[900] : grey[900];
    return (
        <Card sx={{
            backgroundColor: `${cardBgColor}`
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
                <Checkbox
                    checked={todo.completed}
                    onChange={() => Todos.completeTodo(todo)}
                    sx={{
                        color: `${grey["A100"]}`,
                        '&.Mui-checked': {
                            color: `${grey["A100"]}`,
                        },
                    }}
                />
                <Typography sx={{ fontSize: 14 }}>
                    {todo.title}
                </Typography>
                <Button
                    color="error"
                    size="small"
                    onClick={() => Todos.removeTodo(todo.id)}
                >
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
})

export default TodoItem;