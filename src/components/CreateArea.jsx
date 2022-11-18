import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
// import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props){

    const [data,setData] = useState({
      title : "",
      content : ""
    })

    function handleChange(event){
      const{name , value} = event.target;
      setData(prevData=>{
        return {
          ...prevData,
          [name] : value,
        }
      }) 
    }

    function handleClick(e){
      e.preventDefault();
      props.onAdd(data);
      setData({
        title : "",
        content : "",
      })
      
    }
    return (
        <div>
          <form className="create-note">
            <input  onChange={handleChange} name="title" placeholder="Title" value={data.title} />
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={data.content} />
            <Fab onClick={handleClick}><AddIcon/></Fab>
          </form>
        </div>
      );
}

export default CreateArea;