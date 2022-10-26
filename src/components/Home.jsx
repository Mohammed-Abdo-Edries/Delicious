import React from 'react'
import vid from '../assets/videe.mp4'
function Home() {
  return (
    <div className="home"  id="home">
      <video className='vid' src={vid} loop autoPlay muted  />
      <div className="container">
        <div className="intro-text">
          <h2 className="title" data-aos="slide-up" data-aos-duration="1500">We are <span className='second-logo'>Delicious</span></h2><br />
          <div className="landing-text" data-aos="slide-up" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius tempora fuga, voluptatum magni minus dolores pariatur repellendus ratione quibusdam autem, at eum repellat facere! Alias ab quibusdam at libero.</div>
        </div>
      </div>
    </div>
  )
}

export default Home