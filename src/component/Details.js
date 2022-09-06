import React from 'react' 
import Card from './Card';
const Details = () => {
  
  
  return (
    <div className="section section-our-team-freebie">
  <div className="parallax filter filter-color-black">
    <div
      className="image"
      style={{ backgroundImage: 'url("./img/header-2.jpeg")' }}
    ></div>
    <div className="container">
      <div className="content">
        <div className="row">
          <div className="title-area">
            <h2>Who We Are</h2>
            <div className="separator separator-danger">✻</div>
            <p className="description">
              We promise you a new look and more importantly, a new attitude. We
              build that by getting to know you, your needs and creating the
              best looking clothes.
            </p>
          </div>
        </div>
        <div className="team   ">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <Card/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );


  }

export default Details
