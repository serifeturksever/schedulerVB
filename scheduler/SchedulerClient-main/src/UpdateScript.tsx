import React from 'react';
import { useState, useEffect } from 'react';
import './UpdateScript.css';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

function UpdateScript() {

    const location = useLocation()
    const data = location.state.data

  const [script, setScript] = useState(data.script);
  const [date, setDate] = useState(data.date);
  const [type, setType] = useState(data.type);

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
  fetch('http://localhost:8000/update', {
    method: 'POST',
    body: JSON.stringify({
      "_id": data._id,
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
        console.log("data",data.msg);    
         alert(data.msg)
         if (data.status == "ok") {
            window.location.href = "/list"
         }
    })
    .catch((err) => {
        console.log(err.message);
    });
  }

  const getDefaultDateValue = (dateAsNumber: number) => {
    let date = new Date(dateAsNumber * 1000);
    const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day = date.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
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
        defaultValue={data.script}
        onChange={handleTextareaChange}
      />
      <input defaultValue={getDefaultDateValue(data.date)} className="script-date" type='date' onChange={handleDateareaChange}/>
      <select className="script-type" onChange={handleTypeareaChange} defaultValue={data.type} >
        <option value="">Select type</option>
        <option value="bash">BASH</option>
        <option value="powershell">POWERSHELL</option>
        <option value="shell">TERMINAL</option>
      </select>
      <input className="script-submit-btn" type="submit"/>
    </form>
    </div>
    
  );
}

export default UpdateScript;
