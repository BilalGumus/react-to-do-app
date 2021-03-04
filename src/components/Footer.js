import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  footer: {
    zIndex: "1",
    fontWeight: 300,
    textAlign: "center",
    backgroundColor: "#111111",
    position: "fixed",
    width: "100%",
    bottom: "0",
    borderTop: "1px solid #61dafb"
  },
});

function Footer() {
  const classes = useStyles();
  const url = "https://github.com/BilalGumus";
  return (
    // Please Do Not Remove This Section <3
    <div className={classes.footer}>
      Developed via &#x1F496; <Link href={url} alt="github bilal gümüş" rel="author" target="_self" color="primary">BilalGumus</Link>
    </div>
  )
}

export default Footer