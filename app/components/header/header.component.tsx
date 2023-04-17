// @flow
import * as React from 'react';

 const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        {/* <span className="body-text-intro">Full stack developer</span> */}
        <h1 className="heading heading__primary">Adam Boucek!</h1>
        <span className="body-text-main ">Full Stack developer</span>
      </div>
      <div className="header--arrow">
        <a href="#section-projects">
          <div className="arrow-button">
            <span className="arrow"></span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
