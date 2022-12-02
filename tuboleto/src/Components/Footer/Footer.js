import React from "react";
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    TextField, 
    InputAdornment, 
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css"

const theme = createTheme({
    palette: {
        primary: {
            main: "#0071CE"
        },
        secondary: {
            main: "#FFFFFF"
        },
        info: {
            main: "#000000"
        }
    }
})


export default function Footer () {
    return (
        <Box className="footer_box">
            <ThemeProvider theme={theme}>
                <Container>
                    <Grid container spacing={2} className="main_grid">
                        <Grid item xs={4} className="grid_child">
                            <Box>
                                <Typography>Ticket Fast S.A.S</Typography>
                                <Typography>NIT. 900.569.193-0</Typography>
                                <Typography>Contact Center (60-1) 593-6300 o #593</Typography>
                            </Box>
                            <Box className="news">
                                <Typography>Newsletter</Typography>
                                <TextField id="newsletter" label="Correo electrónico" variant="outlined" color="primary" className="email_field" InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon color="primary"/>
                                        </InputAdornment>
                                    ),
                                    className: "email"
                                }}></TextField>
                            </Box>
                        </Grid>

                        <Grid item xs={4} className="grid_child">
                            <Typography>Siguenos en: </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#">
                                        <ListItemIcon>
                                            <InstagramIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText primary="Instagram"></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#">
                                        <ListItemIcon>
                                            <YouTubeIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText primary="YouTube"></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#">
                                        <ListItemIcon>
                                            <TwitterIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText primary="Twitter"></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#">
                                        <ListItemIcon>
                                            <FacebookIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText primary="Facebook"></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={4} className="grid_child menu">
                            <Typography>Menú</Typography>
                            <List className="menu_list" disablePadding>
                                <ListItem>
                                    <ListItemText>Contáctenos - PQRS</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Puntos de venta</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Términos de uso</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Tuboleta Te Cuenta</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Politica de privacidad</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Preguntas frecuentes</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Ventas a Grupos</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Asistencia Tuboleta</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>SIC</ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </Box>
    )
}