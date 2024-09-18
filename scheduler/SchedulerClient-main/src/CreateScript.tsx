import React from 'react';
import { useState, useEffect } from 'react';
import './CreateScript.css';
import Navbar from './Navbar';

function CreateScript() {
  const [script, setScript] = useState("");
  const [date, setDate] = useState(0);
  const [type, setType] = useState("");

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScript(e.target.value);
  }

  const handleDateareaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Veritabanına 13 karakterli mi yazılmalı yoksa 10 karakter mi ?
    // Şimdilik 1 karakterle
    let date = Date.parse(e.target.value);
    let dateAsNumber = Number(date / 1000);
    setDate(dateAsNumber);
  }
  
  const handleTypeareaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (script === "") {
      alert("Please fill script textarea!");
      return;
    }
    
    if (date === 0) {
      alert("Please fill date area!");
      return;
    }

    if (type === "") {
      alert("Please fill type area!");
      return;
    }

    // Using Fetch API
  fetch('http://localhost:8000/create', {
    method: 'POST',
    body: JSON.stringify({
      "script": script,
      "date": date,
      "type": type
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // eklendiğinde alert gösterilecek
        console.log(data.msg);
        alert(data.msg);
        // window.open("/list")
        if (data.status == "ok") {
          window.location.href = "/list"
       }
    })
    .catch((err) => {
        console.log(err.message);
    });
  }

  return (
    <div>
      <Navbar />
    <form className="form" onSubmit={handleSubmit}>
      <textarea
      className="script-textarea"
        rows={30} 
        cols={80}
        placeholder={"Add your feedback"} 
        onChange={handleTextareaChange}
      />
      <input className="script-date" type='date' onChange={handleDateareaChange}/>
      <select className="script-type" onChange={handleTypeareaChange}>
        <option value="">Select type</option>
        <option value="bash">BASH</option>
        <option value="powershell">POWERSHELL</option>
        <option value="terminal">TERMINAL</option>
      </select>
      <input className="script-submit-btn" type="submit"/>
    </form>
    </div>
    
  );
}

export default CreateScript;
