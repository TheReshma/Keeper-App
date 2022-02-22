import React from "react";
import notes  from "./notes";


function Note(notes){
    return ( 
        <div className="note">
            <h1>{notes.title}</h1>
            <p>{notes.content}</p>
        </div>
    );
}

export default Note;