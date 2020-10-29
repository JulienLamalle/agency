import React from 'react';
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div>
      <h4>
        <FormattedMessage id="about.title" />
      </h4>
      <p>
        <FormattedMessage id="about.paragraph" />
      </p>
    </div>
  );
};

export default About;