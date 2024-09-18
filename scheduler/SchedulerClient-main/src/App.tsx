import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateScript from './CreateScript';
import ScriptList from './ScriptList';
import SeeScriptDetail from './SeeScriptDetail';
import UpdateScript from './UpdateScript';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* Burasının kullanımından emin değiilim bakarsın */}
        <Route path="/" element={<CreateScript />} />
        <Route path="/list" element={<ScriptList />} />
        <Route path="/list/:id" element={<SeeScriptDetail />} />
        <Route path="/list/update/:id" element={<UpdateScript />} />
      </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
