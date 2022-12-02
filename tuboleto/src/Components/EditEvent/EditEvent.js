import React, { useState, useRef } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material"
import moment from 'moment'

export default function EditEvent(props) {
    const [open, setOpen] = useState(false)
    const textInputs = useRef()

    const handleClickOpen = async () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getData = () => {
        const data = [...textInputs?.current.querySelectorAll("Input")].map(x => {
            return x.value
        })
        setOpen(false)
        props.method(data)
    }

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen} sx={{ marginTop: ".25rem" }}>
                Update
            </Button>
            <Dialog open={open} onClose={handleClose} ref={textInputs}>
                <DialogTitle>
                    Edit Event
                </DialogTitle>
                    <DialogContent>
                        <TextField variant="outlined" label="Titulo" defaultValue={props.title}></TextField>
                    </DialogContent>
                    <DialogContent>
                        <TextField variant="outlined" label="Fecha" type="date" defaultValue={moment(props.date, "DD/MM/YYYY").format("YYYY-MM-DD")}></TextField>
                    </DialogContent>
                    <DialogContent>
                        <TextField variant="outlined" label="Ubicación" defaultValue={props.place}></TextField>
                    </DialogContent>
                    <DialogContent>
                        <TextField variant="outlined" label="URL Imagen" defaultValue={props.imgUrl}></TextField>
                    </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={getData}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}