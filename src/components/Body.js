import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from "./Card"

const useStyles = makeStyles({
    cardStyle: {
        zIndex: "0",
        overflowX: "auto",
        position: "absolute",
        top: "48px",
        display: "flex",
        minHeight: "calc(100vh - 69px)",
        maxWidth: "100vw",
    }
});

function Body({ cards, setCards }) {
    const classes = useStyles();
    return (
        <Box className={classes.cardStyle}>
            {cards.map((card) => (
                <Card card={card} key={card.id} title={card.title} cards={cards} setCards={setCards} />
            ))}
        </Box>
    )
}

export default Body