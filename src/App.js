import './App.css';
import React, { useState } from 'react';
import CitySelector from './components/cityselector/index';
import CityCard from './components/citycard/index';
import MathQuiz from './components/MathQuiz';
import Answer from './components/Answer';


function App() {

  const [currentCity, setCurrentCity] = useState("")
  function updateCity(newCity){
    setCurrentCity(newCity)
  }
  return (
    <div>
    <div className="Box"> 
    <div className="App">
     
      <CitySelector updateCity=
       {updateCity} />

      {currentCity ? <CityCard city= {currentCity}/> : <p>город не выбран</p> }
      
    </div>
    </div>
{/* _______________________ */}
<div className='MathQuiz_box'>

<MathQuiz/>



</div>

    </div>
   
  );
}


export default App;


