import React from "react";
import { useState } from "react";
import './style.css'

export const CreateForm = ( {dispatch}) => { ///recibe la lista de opciones
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUrl(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({ type : "ADD" , data: url}) ///llamar al dispatch ejecuta la action, ees decir, le mandamos el action.type y .data 
    

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={url} />
      <button >Create URL!</button>
    </form>
    
  );
};
