/* eslint-disable */
import React from "react";
import { Location } from "@reach/router";
import { MDXProvider } from "@mdx-js/react";
import { IntercomProvider } from "react-use-intercom";
import components from "@/components/mdx";

const INTERCOM_APP_ID = "kk4zxl1p";

const App = ({ element }) => {
  return <MDXProvider {...{ components }}>{element}</MDXProvider>;
};

const wrapRootElement = ({ element }) => (
  <Location>
    {(location) => (
      <IntercomProvider appId={INTERCOM_APP_ID} initializeDelay={500}>
        <App {...{ element }} {...location} />
      </IntercomProvider>
    )}
  </Location>
);

export { wrapRootElement };
