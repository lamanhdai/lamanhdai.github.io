import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">JavaScript</span> and UX developer.
            </p>
            <p>
              I learnt every thing so
              <span className="highlight"> fast</span>. I like coding layout and make 
              <span className="highlight">animation</span> from svg.
            </p>
            <p>
              I have still been learning <span className="highlight">how to configure task runner and nodejs</span>.
              I'm interested in UI, UX. Especially animation by
              <span className="highlight">
                canvas
              </span>
              I like to build everything from scratch
            </p>
            <p>
              React-Redux, Node.js, Wordpress are the main interesting. I am making with SASS/CSS.
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
