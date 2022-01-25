import React from 'react';

export default function BaseLogin() {
  return (
  <div className="col-sm-5 bg-img align-self-center">
      <div className="info">
          <div className="logo clearfix">
              { <a href="/#" className="nav-brand">Logo</a> }
          </div>
          <div className="btn-section clearfix">
              <div className="nav-link link-btn btn-primary default-bg">Login</div>
              <div className="nav-link link-btn btn-primary default-bg">Register</div>
          </div>
      </div>
  </div>
  )
}
