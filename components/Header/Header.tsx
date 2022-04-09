import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        NextJS+MobX ToDo App
                    </Typography>
                    <Button color="inherit" sx={{minWidth: "auto"}}>All</Button>
                    <Button color="inherit">Active</Button>
                    <Button color="inherit">Completed</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;