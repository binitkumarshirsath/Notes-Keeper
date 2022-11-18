import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes.jsx";
import CreateArea from "./CreateArea";



const App = ()=>{

     const[notesArray,setNotesArray] = useState([]);

     function handleAdd(NoteItem){
          setNotesArray(prevItems=>{
               return [...prevItems , NoteItem]
          });

     }

     return <>
     <Header/>
     <CreateArea onAdd = {handleAdd}/>

     {notesArray.map((noteItems , i)=>{ return <Notes id = {i} key = {i} title = {noteItems.title} content = {noteItems.content}/>})}
     <Footer/>
     </>        
}

export default App;