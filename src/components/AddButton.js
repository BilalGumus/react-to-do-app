import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles({
    formSize: {
        width: "100%"
    },
    btnSpacing: {
        margin: "0 5px"
    }
});

function AddButton({ inputText, setInputText, todos, setTodos }) {
    const [showInput, setShowInput] = useState(false);
    const handleVisible = () => {
        setShowInput(!showInput);
        setInputText("")
    };

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Math.floor(Math.random() * 10000),
                completed: false,
                text: inputText,
            }
        ]);
        setInputText("")
    }

    const classes = useStyles();
    return (
        <Box>
            {showInput ?
                <Box display="flex">
                    <form noValidate autoComplete="off" className={classes.formSize}>
                        <Box display="flex" flexDirection="row">
                            <Box flexGrow={1}>
                                <TextField id="standard-full-width" label="Add New Item" fullWidth onChange={inputTextHandler} value={inputText} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Fab className={classes.btnSpacing} size="small" color="primary" type="submit" onClick={submitTodoHandler}><DoneIcon /></Fab>
                                <Fab className={classes.btnSpacing} size="small" color="primary" onClick={handleVisible}><CloseIcon /></Fab>
                            </Box>
                        </Box>
                    </form>
                </Box> :
                <Button onClick={handleVisible} fullWidth variant="contained" color="primary" startIcon={<AddIcon />}>ADD NEW ITEM</Button>}
        </Box>
    )
}

export default AddButton