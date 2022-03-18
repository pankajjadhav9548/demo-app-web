import React from 'react';

export default function Products()  {
  return (
<>
<div className='container'>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://i.imgur.com/duWgXRs.png" style={{width:'100%'}}className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">Echo Dot - smart speaker brand in India with Alexa (Black)</h3>
        <p className="card-text">Echo Dot is our best selling smart speaker that can be operated by voice - even from a distance. Alexa can speak both English & Hindi, and new features are added automatically. Hands-free music control: Stream millions of songs in your favorite language from Amazon Prime Music, Spotify, JioSaavn, Gaana, or Apple Music
Versatile usage: use Echo Dot as a standalone speaker or connect it to other.</p>
<h4>Rs. ₹1,999/-</h4>
        <button type="button" className="btn btn-success">Add to cart</button>
      </div>
    </div>
  </div>
  </div>
</div>
</>
  )
};