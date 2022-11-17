import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes.jsx";
import CreateArea from "./CreateArea";



const App = ()=>{
     return <>
     <Header/>
     <CreateArea/>
     <Notes key={1} title="Note title" content="Note content" />
     <Footer/>
     </>        
}

export default App;