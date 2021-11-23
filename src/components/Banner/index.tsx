import React from "react";
import { Link } from "gatsby";
import { Container } from "@/components";
import { EmptyProps } from "@/definitions";

import "./Banner.styles.css";

export const Banner: React.FC<EmptyProps> = () => {
  return (
    <>
      <div className="banner">
        <Container>
          <p>
            <strong>
              Meet us at the{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-current underline"
                to="https://sbcevents.com/sbc-summit-north-america/"
              >
                SBC Summit
              </Link>
            </strong>{" "}
            from Nov. 30 to Dec. 2, 2021 – <strong>Booth #101</strong>.
          </p>
        </Container>
      </div>
    </>
  );
};
