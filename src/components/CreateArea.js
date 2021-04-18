import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function CreateArea (props){

    const [note, setNote] = useState({
        name: "",
        number: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
            ...prevNote,
            [name]: value
        };
        });        
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            name: "",
            number: ""
        });
        event.preventDefault();
        
    };

    return <div className="app">
    
    <TextField name="name" onChange={handleChange} value={note.name} id="filled-basic" label="Insert Name" variant="filled" />
    <br/>
    <TextField name="number" onChange={handleChange} value={note.number} id="outlined-basic" label="Insert Number" variant="outlined" />
    <br/>
    <Button onClick={submitNote} variant="contained" color="primary"><AddCircleOutlineIcon /></Button>
    
            </div>
}

export default CreateArea;