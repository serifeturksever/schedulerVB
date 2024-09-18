import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "./ScriptCard.css"
import { Link } from 'react-router-dom';

function ScriptCard(props: any) {

  const seeScriptDetail = () => {}

  const updateScript = () => {}
  const deleteScript = () => {
    let response = window.confirm('Are you sure to delete this script ?')
    if(response) {
  fetch('http://localhost:8000/delete', {
    method: 'POST',
    body: JSON.stringify({
      "_id": props.data._id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // eklendiğinde alert gösterilecek
        alert(data.msg)

        // geçici çözüm
        window.location.reload()
    })
    .catch((err) => {
        console.log(err.message);
    });
    } 
  }

  return (
    <div className="card-container">
        <p className="card-script">
            {props.data.script}
        </p>
        <div className="button-container">
            <Link to={`/list/${props.data._id}`} state={props}><button className="card-see-detail-btn">see detail</button></Link>
            <Link to={`/list/update/${props.data._id}`} state={props}><button className="card-update-btn">update</button></Link>
            <button className="card-delete-btn" onClick={deleteScript}>delete</button>
            {/* <Link to={"/"}>asd</Link> */}
        </div>
    </div>
  );
}

export default ScriptCard;