import React, { ReactElement, useEffect, useRef } from 'react'
import './header.scss';
import { Link, useLocation } from 'react-router-dom';

const headerNav = [
  {
    display: 'Now Playing',
    path: '/'
  },
  {
    display: 'Top Rated',
    path: '/top-rated'
  }
]

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);

  const getClassName = (path: string) => {
    if(pathname.includes('/details')) return '';
    if (path === '/top-rated') {
      if (pathname.includes(path)) return 'active';
      else return '';
    }
    else {
      if (pathname.includes('top-rated')) return '';
      else return 'active';
    }
  }

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="dashboard">
          <Link to="/" >Movies App</Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((item, index) => (
              <li key={index} className={getClassName(item.path)}>
                <a href={item.path}>
                  {item.display}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header