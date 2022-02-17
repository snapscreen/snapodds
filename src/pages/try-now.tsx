import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import {
  Layout,
  Button,
  Container,
  Hero,
  Seo,
  DownloadBadge,
} from "@/components";

import DemoVideo from "../videos/SnapOdds-demo-game.mp4";

var QRCode = require("qrcode.react");

const TryNow: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  let url = "https://snapodds.onelink.me/rx4N/de77d92a";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="See how it works" />
      <Hero
        title="Try and experience SnapOdds yourself!"
        lead="Use our demo app or mobile website."
      ></Hero>
      <Container>
        <ol className="relative mb-8 prose prose-lg lg:prose-xl mx-auto space-y-16 text-center">
          <li>
            <h2 className="text-center">
              1. Scan QR code with your mobile phone.
            </h2>
            <div className="rect">
              <span>
                <QRCode
                  value={url}
                  renderAs={"svg"}
                  className="mx-auto p-2 bg-white"
                />
              </span>
            </div>
            <p className="text-lg">
              <a
                target="_blank"
                className="text-current underline"
                href="https://demo.snapodds.com/"
              >
                https://demo.snapodds.com
              </a>
              <br /> – or – <br />
              For the best experience{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-current underline"
                href="https://apps.apple.com/at/app/snapodds/id1596532274?l=en"
              >
                download our iPhone app
              </a>{" "}
              in the App Store.
            </p>
            <div className="flex justify-center">
              <DownloadBadge />
            </div>
            <div className="flex justify-center mt-8" aria-hidden="true">
              <span className="flex h-24 w-0.5 bg-skin-fg" aria-hidden="true" />
            </div>
          </li>
          <li>
            <h2 className="text-center">
              2. Play and snap the demo game below.
            </h2>
            <div className="w-full aspect-video">
              <video
                controls
                loop
                muted
                autoPlay
                className="w-full mx-auto"
                preload="auto"
              >
                <source src={DemoVideo} type="video/mp4" />
              </video>
            </div>
            <p>
              <small>The video above is only for demo reasons.</small>
            </p>
            <p className="lead font-bold">
              SnapOdds works for live games on TV!
            </p>
            <p>
              <a
                href="https://demo.snapodds.com/sport/events/upcoming"
                target="_blank"
              >
                <small>See the list of upcoming sports games.</small>
              </a>
            </p>
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
