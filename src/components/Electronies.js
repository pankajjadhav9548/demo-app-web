import React from 'react';
import { Link } from 'react-router-dom';

export default function Electronies()  {
  return (
    <>

      <div className='container'>
          <h3><center>Featured Products</center></h3><hr/>
            <div className="card col-md-3">
            <img src="https://i.imgur.com/duWgXRs.png" style={{width:'90%'}}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Echo Dot - smart speaker brand in India with Alexa (Black)</h5>
                <p className="card-text">Echo Dot is our best selling smart speaker that can be operated by voice - even from a distance. Alexa can speak both English & Hindi, and new features are added automatically</p>
                <Link to="#" className="btn btn-primary">Grab Now ₹1,999</Link>
            </div>
            </div>
            <div className="card col-md-3">
            <img src="https://i.imgur.com/NKvkfTT.png" style={{width:'90%'}}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Fire-Boltt Ring Bluetooth Calling Smartwatch </h5>
                <p className="card-text">Fire-Boltt Ring enables you to make and receive calls directly from your watch via the built-in speaker and microphone. Fire-Boltt Ring enables you to make and receive calls directly. </p>
                <Link to="#" className="btn btn-primary">Grab Now ₹2,999</Link>
            </div>
            </div>
            <div className="card col-md-3">
            <img src="https://i.imgur.com/duWgXRs.png" style={{width:'90%'}}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Echo (4th Gen, 2020 release) | Premium sound </h5>
                <p className="card-text">The all-new Echo delivers premium sound (powered by Dolby) and delivers clear highs, dynamic mids, and deep bass for rich, detailed sound that adapts to any room.</p>
                <Link to="#" className="btn btn-primary">Grab Now ₹1,589</Link>
            </div>
            </div>
            <div className="card col-md-3">
            <img src="https://i.imgur.com/DGkR4OQ.png" style={{width:'90%'}}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Buono Nano X- Drone with 360 Degree</h5>
                <p className="card-text">4G frequency RC transmitter allows you to fly your copter with strong signal among the other aircrafts 6 axis gyro system with built in gyroscope. It provides strong stability, easily implement various flight movements.</p>
                <Link to="#" className="btn btn-primary">Grab Now ₹9,999</Link>
            </div>
            </div>

      </div>
      </>
 )
}
