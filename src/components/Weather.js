import React from 'react'
import './Weather.css'

const Weather = () => {
  return (
    <div className='weather-container'>
        <h2>Mars Weather:</h2>

        <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe>
    </div>
)}

export default Weather