import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
// import "./carousel.css";
import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import Simple from "../components/carousel";
import Section from "../components/section";
import { Grid } from "@material-ui/core";


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Index = ({ deviceType }) => {
  return (
    <Fragment>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
    </Fragment>
  );
};
Index.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default Index;
