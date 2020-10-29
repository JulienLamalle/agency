import React from 'react';
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <div>
      <h4>
        <FormattedMessage id="home.title" />
      </h4>
      <p>
        <FormattedMessage id="home.paragraph" />
      </p>
    </div>
  );
};

export default Home;