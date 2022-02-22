import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes  from "./components/notes";

function App(){
    return ( <div><Header /> <Footer /> {notes.map(Note)}</div>);
}

export default App;