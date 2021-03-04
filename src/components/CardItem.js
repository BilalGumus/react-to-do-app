import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    cardItem: {
        margin: "12px 0",
        padding: "8px 10px",
        color: "#ffffff",
        backgroundColor: "#1d1d1d"
    },
    cardCompleted: {
        textDecoration: "line-through",
        opacity: .5,
        background: "rgb(97, 218, 251, .12)"
    },
    btnSpacing: {
        margin: "0 5px"
    }
});

function CardItem({ text, todo, todos, setTodos }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editInput, setEditInput] = useState("");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const editHandler = (e) => {
        setEditInput(todo.text);
        setEditMode(!editMode);
        e.preventDefault();
        setAnchorEl(null);
    }

    const EditedInputTextHandler = (e) => {
        setEditInput(e.target.value);
    }

    const submitEditHandler = (e) => {
        e.preventDefault();
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        text: editInput
                    };
                }
                return item;
            })
        )
        setEditMode(false);
        setAnchorEl(null);
    }

    const deleteHandler = () => {
        setTodos(todos.filter((e) => e.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        )
    }

    return (
        editMode ?
            <Paper elevation={3} className={classes.cardItem}>
                <form noValidate autoComplete="off" className={classes.formSize}>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1}>
                            <TextField id="standard-full-width" label="Edit Item" fullWidth onChange={EditedInputTextHandler}/>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Fab className={classes.btnSpacing} size="small" color="primary" type="submit" onClick={submitEditHandler}><DoneIcon /></Fab>
                            <Fab className={classes.btnSpacing} size="small" color="primary" type="submit" onClick={editHandler}><CloseIcon /></Fab>
                        </Box>
                    </Box>
                </form>
            </Paper> :
            <Paper elevation={3} className={`${classes.cardItem} ${todo.completed ? classes.cardCompleted : ""}`}>
                <Box display="flex" alignItems="center" container="true">
                    <Box flexGrow={1} alignSelf="center"><FormControlLabel control={<Checkbox onClick={completeHandler} name="todoCheck" color="primary" />} label={text}/></Box>
                    <Box><IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><MoreVertIcon />
                    </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={editHandler}><CreateIcon />Edit Task</MenuItem>
                            <MenuItem onClick={deleteHandler}><DeleteIcon />Delete Task</MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Paper>
    )
}

export default CardItem