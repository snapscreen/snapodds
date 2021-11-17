import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Button, Container, Hero, Seo } from "@/components";
var QRCode = require("qrcode.react");

const TryNow: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  let url = "https://bet.us.snapscreen.com/snap";
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="SnapOdds demo" />
      <Hero
        title="Try now!"
        lead="We commit ourselves to create a great user experience. Best way to understand how easy SnapOdds works is to trying it."
      ></Hero>
      <Container>
        <div className="relative prose prose-lg lg:prose-xl mx-auto space-y-16 text-center">
          <section>
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
            <p>Or</p>
            <p>
              Open <span className="text-skin-primary">{url}</span> in your
              mobile phone webbrowser.
            </p>
          </section>
          <div className="flex justify-center" aria-hidden="true">
            <span
              className="flex h-24 w-0.5 bg-skin-base-muted"
              aria-hidden="true"
            />
          </div>
          <section>
            <h2 className="text-center">2. Allow camera access.</h2>
            <p>Play the video below.</p>
          </section>
          <div className="flex justify-center" aria-hidden="true">
            <span
              className="flex h-24 w-0.5 bg-skin-base-muted"
              aria-hidden="true"
            />
          </div>
          <section>
            <h2 className="text-center">
              3. Take a Snap of the playing video.
            </h2>
            <p>Fit the video in the view rectangle.</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0&muted=1"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <div className="flex justify-center" aria-hidden="true">
            <span
              className="flex h-24 w-0.5 bg-skin-base-muted"
              aria-hidden="true"
            />
          </div>
          <section>
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
          </section>
        </div>
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
