import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
    const [ list , addList ] = useState([]);
  
      function updateNote(newList){
          addList( prevList => {
            return [ ...prevList, newList ];
          });
      }
  
      function deleteNote(id) {
        addList( prevList => {
          return prevList.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
  
    return (
      <div>
        <Header />
        <CreateArea onAdd={updateNote}/>
        {list.map((noteItem, index) => {
          return(
            <Note className = "note"
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
  
  export default App;