import React from "react";
import Button from '@material-ui/core/Button';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';

function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    

    return (
        <div className="note">
        <p>{props.name} - {props.number}</p><Button onClick={handleClick} variant="contained" color="primary"><DeleteSweepOutlinedIcon /></Button>
        </div>
    )
    
}

export default Note;