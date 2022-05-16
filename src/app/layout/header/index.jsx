import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
export default function Header({}) {
  return (
    <div className='__dml header'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about-us'>About us</Link>
        </li>
      </ul>
    </div>
  );
}
