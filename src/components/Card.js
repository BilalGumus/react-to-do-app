import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField'
import AddButton from "./AddButton"
import CardItem from "./CardItem"

const useStyles = makeStyles({
    card: {
        color: "#ffffff",
        backgroundColor: "#222222",
        minWidth: "350px",
        maxWidth: "350px",
        width: "100%",
        height: "fit-content",
        margin: "12px 25px"
    },
    cardHeader: {
        backgroundColor: "#1d1d1d",
        borderBottom: "1px solid #61dafb",
        padding: "8px 4px"
    },
    cardBodyContainer: {
        padding: "8px"
    },
    btnSpacing: {
        margin: "0 5px"
    }
});

function Card({ card, cards, setCards }) {
    const classes = useStyles();

    const [inputText, setInputText] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");
    const [todos, setTodos] = useState([]);

    const deleteHandler = () => {
        setCards(cards.filter((e) => e.id !== card.id));
    }

    const editModeHandler = () => {
        setEditMode(!editMode)
    }

    const editChangeHandler = (e) => {
        setEditedTitle(e.target.value);
    }
    
    const editedTitleSubmitHandler = (e) => {
        e.preventDefault();
        setCards(
            cards.map((item) => {
                if (item.id === card.id) {
                    return {
                        ...item,
                        title: editedTitle
                    };
                }
                return item;
            })
        )
        setEditMode(false);
    }

    return (
        <Paper elevation={3} className={classes.card}>
                {editMode ?
                    <form noValidate autoComplete="off" className={classes.cardHeader}>
                        <Box display="flex" flexDirection="row">
                            <Box flexGrow={1} pl={1}>
                            <TextField id="standard-full-width" label="Edit Title" fullWidth onChange={editChangeHandler}/>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Fab className={classes.btnSpacing} size="small" color="primary" type="submit" onClick={editedTitleSubmitHandler}><DoneIcon /></Fab>
                                <Fab className={classes.btnSpacing} size="small" color="primary" onClick={editModeHandler}><CloseIcon /></Fab>
                            </Box>
                        </Box>
                    </form>
                    :
                    <Box display="flex" className={classes.cardHeader}>
                        <Box><IconButton color="inherit" onClick={editModeHandler}><CreateIcon fontSize="small" /></IconButton></Box>
                        <Box flexGrow={1} alignSelf="center" fontSize="16px">{card.title}</Box>
                        <Box><IconButton color="inherit" onClick={deleteHandler}><DeleteIcon fontSize="small" /></IconButton></Box>
                    </Box>
                }
            <Box className={classes.cardBodyContainer}>
                {todos.map((todo) => (
                    <CardItem key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
                <AddButton inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
            </Box>
        </Paper>
    )
}

export default Card