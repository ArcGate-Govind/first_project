import React from 'react'

const Header = () => {
  return (
 <div className="section section-header mb-5">
  <div className="parallax filter filter-color-red">
    <div
      className="image"
      style={{ backgroundImage: 'url("./img/header-1.jpeg")' }}
    ></div>
    <div className="container">
      <div className="content">
        <div className="title-area">
          <p>Free Demo</p>
          <h1 className="title-modern">Gaia</h1>
          <h3>Probably the most stylish bootstrap template in the world!</h3>
          <div className="separator line-separator">♦</div>
        </div>
        <div className="button-get-started">
          <a
            href="http://www.creative-tim.com/product/gaia-bootstrap-template"
            target="_blank"
            className="btn btn-white btn-fill btn-lg "
          >
            Download Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header