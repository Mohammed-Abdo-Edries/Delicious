import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

function Testamoneals() {
  return (
    <div className="testamoneals" id="testamoneals">
      <div className="overlay">
          <div className="special-title">our claints reviews</div>
          <div className="container">
            <div className="card" data-aos="zoom-out-right" data-aos-duration="1500">
              <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni rerum aliquam! Temporibus dolores 
              </div>
              <div className="logos">
                <AiFillFacebook />
                <BsTwitter />
                <AiFillInstagram />
              </div>
            </div>
            <div className="card" data-aos="zoom-out-right" data-aos-duration="1500">
              <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni rerum aliquam! Temporibus dolores 
              </div>
              <div className="logos">
                <AiFillFacebook />
                <BsTwitter />
                <AiFillInstagram />
              </div>
            </div>
            <div className="card" data-aos="zoom-out-right" data-aos-duration="1500">
              <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="" />
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni rerum aliquam! Temporibus dolores 
              </div>
              <div className="logos">
                <AiFillFacebook />
                <BsTwitter />
                <AiFillInstagram />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Testamoneals