import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Typography } from "@mui/material"
import styles from "./Navbar.css"

const actualStyle = {
    item: {
        padding: "1.5rem 1rem 0 1rem",
        "&:hover": { backgroundPosition: "100% 100%" },
    },
    backgroundWithBeforeEffect: {
        background: "linear-gradient(#FFFFFF, #FFFFFF 50%, #0874cc 50%, #0874cc)",
        backgroundSize: "100% 200%",

        transition: "background .5s",
        paddingBottom: "3rem",
        borderRadius: ".25rem .25rem 0 0",
    },
    ticketPunch: { borderRight: ".15rem dashed #0874cc", marginRight: "1rem" },
    links: {
        color: "#000000",
        textDecoration: "none"
    },
    title: {
        flexGrow: 1,
        fontFamily: "logofuente",
        marginTop: "1rem"
    }
}

export default function Navbar() {

    return (
        <>
            <Box sx={actualStyle.ticketPunch}></Box>
            <Typography variant="h3" sx={actualStyle.title}>
                <Link component={ RouterLink } to={"/"} sx={actualStyle.links}>Tuboleto</Link>
            </Typography>
            <Box
                sx={{
                    ...actualStyle.item,
                    ...actualStyle.backgroundWithBeforeEffect,
                }}
            >
                <Link variant="body1" component={RouterLink} to={"/login"} sx={actualStyle.links}>Log in</Link>
            </Box>
            <Box
                sx={{
                    ...actualStyle.item,
                    ...actualStyle.backgroundWithBeforeEffect,
                }}
            >
                <Link variant="body1" component={RouterLink} to={"/register"} sx={actualStyle.links}>Join us</Link>
            </Box>
        </>
    )
}