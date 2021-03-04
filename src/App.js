import React, { useState } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#61dafb",
      },
      background: {
        default: "#181818",
        paper: "#222222"
      }
    },
    typography: {
      fontFamily: "Oswald, sans-serif",
    },
  });

  const [cards, setCards] = useState([]);

  const createCardHandler = (e) => {
    e.preventDefault();
    setCards([
      ...cards,
      {
        id: Math.floor(Math.random() * 10000),
        title: "Card Title"
      },
    ]);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App" >   
        <Navbar createCardHandler={createCardHandler} />
        <Body cards={cards} setCards={setCards} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App