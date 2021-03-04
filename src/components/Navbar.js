import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import img from "../logo.svg"

const useStyles = makeStyles({
    navbar: {
        zIndex: "1",
        position: "fixed",
        top: "0",
        width: "100%",
        background: "#121212",
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    },
    img: {
        width: "48px"
    }
});

function Navbar({ createCardHandler }) {
    const classes = useStyles();
    return (
        <Box className={classes.navbar}>
            <Grid container>
                <Grid item xs={false} sm={4}>
                </Grid>
                <Grid item xs={8} sm={4}>
                    <Hidden only="xs">
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <img src={img} alt="react logo" className={classes.img}></img>
                        REACT TO DO APP
                        <img src={img} alt="react logo" className={classes.img}></img>
                    </Box>
                    </Hidden>
                    <Hidden smUp>
                    <Box display="flex" justifyContent="flex-start" alignItems="center" height="100%">
                        <img src={img} alt="react logo" className={classes.img}></img>
                        REACT TO DO APP
                    </Box>
                    </Hidden>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                        <IconButton color="inherit" onClick={createCardHandler}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Navbar