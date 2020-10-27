import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import { withPrefix } from 'gatsby';

import Carbon from '../../images/frictionless.jpg';
const FirstLeftText = () => <p>What are Digital Business Automation Architectures?</p>;

const FirstRightText = () => (
  <p>
    Explore the different facets of integrating ODM with WML.
    <a
      className={calloutLink}
      href={withPrefix(`/introduction/`)}
    >
      Introduction →
    </a>
  </p>
);

const SecondLeftText = () => <p>Garage</p>;

const SecondRightText = () => (
  <p>
    IBM Garage™ is a bold, comprehensive approach to innovation and transformation that brings designers and developers together with your business and IT stakeholders to quickly create and scale new ideas that can dramatically impact your business.
    <a
      className={calloutLink}
      href="https://www.ibm.com/garage"
      target="_blank"
      rel="noopener noreferrer"
    >
      IBM Garage →
    </a>
  </p>
);

const BannerText = () => <h1>ODM and WML Integration</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
