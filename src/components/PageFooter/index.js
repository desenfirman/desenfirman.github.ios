import './style.scss'
import React from 'react';
import { Link } from 'gatsby'

export default function PageFooter() {
  return (
      <footer className='container-fluid' role="contentinfo">
        <p>
          Copyright © 2018 - Created with ♥ by desenfirman
        <br />
          <span className="credit">Powered by <a href="https://pages.github.com">Gatsby JS x GitHub Pages</a> | For more, more and more credit <Link to="/about#credit">just click here</Link></span>
        </p>
      </footer>
  );
}