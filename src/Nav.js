import React from 'react'
import './Nav.css';

function Nav() {
    return (
        <>
        <header className="header">
        <div className="container-fluid">
          
          <div className="header__wrap">
            <a className="logo" href="/">
              <span className="logo-img">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.56214 11.7658L13.9999 6.328L19.4403 11.7682L22.6043 8.60418L13.9999 0L5.39838 8.6016L8.56225 11.7656L8.56214 11.7658ZM0 14L3.1641 10.8354L6.32797 13.9993L3.16387 17.1634L0 14ZM8.56214 16.2345L13.9999 21.672L19.4402 16.2319L22.6059 19.3943L22.6043 19.3959L13.9999 28L5.39838 19.3984L5.3939 19.3939L8.56248 16.2342L8.56214 16.2345ZM21.6719 14.0013L24.836 10.8372L27.9999 14.0011L24.8359 17.1652L21.6719 14.0013Z" fill="#E5701B"/>
                  <path d="M17.209 13.9983H17.2103L14 10.7877L11.627 13.16L11.3544 13.4327L10.7922 13.9951L10.7877 13.9994L10.7922 14.004L14 17.2123L17.2106 14.0017L17.2121 13.9999L17.2092 13.9983" fill="#E5701B"/>
                  </svg>
              </span>
              <span className="col">
                <span className="h2">TNL</span>
                <span className="h5">Stake &amp; Earn.</span>
              </span>
            </a>
          </div>
        </div>
      </header>
      </>
    )
}

export default Nav
