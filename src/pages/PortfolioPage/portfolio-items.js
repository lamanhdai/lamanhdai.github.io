import React from 'react';

export default [{
  name: 'typescript',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Typescript
      </div>
      <div className='portfolio-item__desc'>
        JavaScript type checking library in run time
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/typescript">NPM</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Microsoft/TypeScript">More</a>
      </div>
    </div>
  )
}, {
  name: 'react',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        React
      </div>
      <div className='portfolio-item__desc'>
        Flexible and Optimazable with library
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">Site</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react/">More</a>
      </div>
    </div>
  )
}, {
  name: 'vuejs',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Vuejs
      </div>
      <div className='portfolio-item__desc'>
        Easy framework start from scratch
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-vuejs"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">Site</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vuejs/vue">More</a>
      </div>
    </div>
  )
}, {
  name: 'axios',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Axios
      </div>
      <div className='portfolio-item__desc'>
        Promise based HTTP client for the browser and node.js
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/axios/axios">More</a>
      </div>
    </div>
  )
}]