
import WeatherForecast from './WeatherForecast';
import React, { useState, useEffect } from 'react';
import "./App.css"



const App = () => {
  return (
    <div>
      <h1>Your React App</h1>
      <WeatherForecast />

      <div>
        <section className='h-screen bg-green-400 flex items-center justify-center m-12 text-center text-3xl'>
          <p>tailwind test</p>
        </section>
      </div>

    </div>
    
    
  );
};

export default App;
