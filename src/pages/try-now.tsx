import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Button, Container, Hero, Seo } from "@/components";
var QRCode = require("qrcode.react");

const TryNow: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  let url = "https://snapodds.onelink.me/rx4N/de77d92a";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="SnapOdds demo" />
      <Hero
        title="Try now!"
        lead="We commit ourselves to create a great user experience. Best way to understand how easy SnapOdds works is to trying it."
      ></Hero>
      <Container>
        <ol className="relative prose prose-lg lg:prose-xl mx-auto space-y-16 text-center">
          <li>
            <h2 className="text-center">
              1. Scan QR code with your mobile phone.
            </h2>
            <p>
              For the best experience download our demo iPhone app in the App
              Store.
            </p>
            <div className="rect">
              <span>
                <QRCode
                  value={url}
                  renderAs={"svg"}
                  className="mx-auto p-2 bg-white"
                />
              </span>
            </div>
            <div className="flex justify-center mt-8" aria-hidden="true">
              <span className="flex h-24 w-0.5 bg-skin-fg" aria-hidden="true" />
            </div>
          </li>
          <li>
            <h2 className="text-center">2. Snap the demo video below.</h2>
            <p>
              The video below is only temporarily used for demo reasons.
              <br />
              Our Demo App works also for live games on TV!
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/Aw3xFO1wdJ4?autoplay=true&mute=1&start=250"
                width="640"
                height="360"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center mt-8" aria-hidden="true">
              <span className="flex h-24 w-0.5 bg-skin-fg" aria-hidden="true" />
            </div>
          </li>
          <li>
            <h2 className="text-center">
              <span aria-label="Celebrate" role="img">
                🎉
              </span>
              <span className="sr-only">Magic!</span>
            </h2>
            <p>Great! How simple was that?</p>
            <Button to="/contact" as="link" styleType="primary">
              Interested? Get in touch.
            </Button>
          </li>
        </ol>
      </Container>
    </Layout>
  );
};

export default TryNow;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
