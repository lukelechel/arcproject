import React from 'react';
import './Error.css';

import MenuBar from '../MenuBar/MenuBar'
import FourTopics from '../FourTopics/FourTopics'
import Footer from '../Footer/Footer'

const Error = () => {
  return (
    <div>
      <MenuBar />
      <div id="errorMessage">
          <h1>Page Not Found.</h1>
          <p>Sorry, this page cannot be found. Please return to our <a href="/" alt="Home">home page</a>.</p>
      </div>
      <FourTopics />
      <Footer />
    </div>
  )
}

export default Error;