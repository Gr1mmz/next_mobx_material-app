import React from "react";
import {AppBar, Box, Toolbar, Typography, Button} from "@mui/material";
import {observer} from "mobx-react-lite";
import Todos from "../../store/todos";

const Header = observer(() => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        NextJS+MobX ToDo App
                    </Typography>
                    <Button
                        color="inherit"
                        sx={{minWidth: "auto"}}
                        onClick={() => Todos.setFilter("all")}
                    >
                        All
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => Todos.setFilter("active")}
                    >
                        Active
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => Todos.setFilter("completed")}
                    >
                        Completed
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
});

export default Header;