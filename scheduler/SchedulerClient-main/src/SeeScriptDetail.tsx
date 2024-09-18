import React from 'react';
import { useState, useEffect } from 'react';
import './Navbar.css';
import './SeeScriptDetail.css';
import { useLocation } from 'react-router-dom';

function SeeScriptDetail() {

  const [date, setDate] = useState("");

    const location = useLocation()
  const data = location.state.data

const calculateDate = (date: Number): String => {
  let dateAsNumber = location.state.data.date * 1000;
  let dateAsStr = new Date(dateAsNumber);
  return dateAsStr.toString()
}

  return (
    <div className='detail-container'>
        <p>{data.script}</p>
        <p>{data.type}</p>
        <p>{calculateDate(data.date)}</p>
    </div>
  );
}

export default SeeScriptDetail;