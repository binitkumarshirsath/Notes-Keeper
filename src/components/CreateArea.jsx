import React, { useState } from "react";

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
          <form>
            <input  onChange={handleChange} name="title" placeholder="Title" value={data.title} />
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={data.content} />
            <button onClick={handleClick}>Add</button>
          </form>
        </div>
      );
}

export default CreateArea;