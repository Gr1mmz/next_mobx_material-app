import React, {useState} from "react";
import {Box, TextField} from "@mui/material";
import Todos from "../../store/todos";
import {observer} from "mobx-react-lite";
import { green } from '@mui/material/colors';

const TodoInput = observer(() => {
    const [value, setValue] = useState("");
    const onAddHandler = (key: string) => {
        if (key === "Enter") {
            Todos.addTodo({
                id: Date.now(),
                title: value,
                completed: false
            });
            setValue("");
        }
    }
    return (
        <Box sx={{
            marginBottom: "2em"
        }}>
            <TextField
                color="success"
                id="filled-basic"
                label="Add your todo"
                variant="filled"
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={e => onAddHandler(e.key)}
            />
        </Box>
    );
})

export default TodoInput;