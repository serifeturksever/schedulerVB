import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ScriptCard from './ScriptCard';

function ScriptList() {

  const [scripts, setScripts] = useState([]);

  // react hooks
  useEffect(() => {
    fetch('http://localhost:8000/')
    .then(res => res.json())
    .then(data => {setScripts(data)})
  }, []);

  // veri yoksa napılabilir ona bakıcam
  return (
    <div>
        <Navbar />
          { scripts &&
            scripts.map(script => {
              return <ScriptCard data={script} />
            })
          }
    </div>
  );
}

export default ScriptList;