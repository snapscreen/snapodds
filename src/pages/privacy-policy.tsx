import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo } from "@/components";

const Privacy: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Privacy Policy" />
      <Hero
        title="Privacy Policy"
        lead="We believe you should always know what data we collect from you and how we use it, and that you should have meaningful control over both. That’s the basic purpose of this Privacy Policy."
      ></Hero>
      <Container>
        <article className="prose prose-lg mx-auto">
          <p>
            This privacy policy (“<strong>Policy</strong>”) describes how
            Snapscreen Inc and its related companies (“<strong>Company</strong>
            ”) collect, use and share personal information of consumer users of
            this website, snapscreen.com (the “<strong>Site</strong>”). This
            Policy also applies to any of our other websites that post this
            Policy. This Policy does not apply to websites that post different
            statements.
          </p>
          <h2>What We Collect</h2>
          <p>We get information about you in a range of ways.</p>
          <ul>
            <li>
              <strong>Information You Give Us.</strong> We collect your&lrm;
              name, email address, username, password as well as other
              information you directly give us on our Site.
            </li>
            <li>
              <strong>Information We Get From Others.</strong> We may get
              information about you from other sources. We may add this to
              information we get from this Site.
            </li>
            <li>
              <strong>Information Automatically Collected.</strong> We
              automatically log information about you and your computer. For
              example, when visiting our Site, we log your computer operating
              system type, browser type, browser language, the website you
              visited before browsing to our Site, pages you viewed, how long
              you spent on a page, access times and information about your use
              of and actions on our Site.
            </li>
            <li>
              <strong>Cookies.</strong> We may log information using "cookies."
              Cookies are small data files stored on your hard drive by a
              website. We may use both session Cookies (which expire once you
              close your web browser) and persistent Cookies (which stay on your
              computer until you delete them) to provide you with a more
              personal and interactive experience on our Site. This type of
              information is collected to make the Site more useful to you and
              to tailor the experience with us to meet your special interests
              and needs.
            </li>
          </ul>
          <h2>Use Of Personal Information</h2>
          <p>We use your personal information as follows:</p>
          <ul>
            <li>
              We use your personal information to operate, maintain, and improve
              our sites, products, and services.
            </li>
            <li>
              We use your personal information to process and deliver contest
              entries and rewards.
            </li>
            <li>
              We use your personal information to respond to comments and
              questions and provide customer service.
            </li>
            <li>
              We use your personal information to send information including
              confirmations, invoices, technical notices, updates, security
              alerts, and support and administrative messages.
            </li>
            <li>
              We use your personal information to communicate about promotions,
              upcoming events, and other news about products and services
              offered by us and our selected partners.
            </li>
            <li>
              We use your personal information to link or combine user
              information with other personal information.
            </li>
            <li>
              We use your personal information to protect, investigate, and
              deter against fraudulent, unauthorized, or illegal activity.
            </li>
            <li>
              We use your personal information to provide and deliver products
              and services customers request.
            </li>
          </ul>
          <h2>Sharing Of Personal Information</h2>
          <p>We may share personal information as follows:</p>
          <ul>
            <li>
              We may share personal information with your consent. For example,
              you may let us share personal information with others for their
              own marketing uses. Those uses will be subject to their privacy
              policies.
            </li>
            <li>
              We may share personal information when we do a business deal, or
              negotiate a business deal, involving the sale or transfer of all
              or a part of our business or assets. These deals can include any
              merger, financing, acquisition, or bankruptcy transaction or
              proceeding.
            </li>
            <li>
              <p>
                We may share personal information for legal, protection, and
                safety purposes.
              </p>
              <ul>
                <li>We may share information to comply with laws.</li>
                <li>
                  We may share information to respond to lawful requests and
                  legal processes.
                </li>
                <li>
                  We may share information to protect the rights and property of
                  Snapscreen Inc, our agents, customers, and others. This
                  includes enforcing our agreements, policies, and terms of use.
                  o We may share information in an emergency. This includes
                  protecting the safety of our employees and agents, our
                  customers, or any person.
                </li>
              </ul>
            </li>
            <li>
              We may share information with those who need it to do work for us.
            </li>
          </ul>
          <p>
            We may also share aggregated and/or anonymized data with others for
            their own uses.
          </p>
          <h2>Information Choices And Changes</h2>
          <p>
            Our marketing emails tell you how to “opt-out.” If you opt out, we
            may still send you non-marketing emails. Non-marketing emails
            include emails about your accounts and our business dealings with
            you.
          </p>
          <p>
            You may send requests about personal information to our Contact
            Information below. You can request to change contact choices,
            opt-out of our sharing with others, and update your personal
            information.
          </p>
          <p>
            You can typically remove and reject cookies from our Site with your
            browser settings. Many browsers are set to accept cookies until you
            change your settings. If you remove or reject our cookies, it could
            affect how our Site works for you.
          </p>
          <h2>Contact Information</h2>
          <p>
            We welcome your comments or questions about this privacy policy. You
            may also contact us at our address:
            <strong>Snapscreen Inc’s Agent</strong> at: 9 E. LOOCKERMAN STREET
            SUITE 311 Dover, Delaware 19901
          </p>
          <h2>Changes To This Privacy Policy</h2>
          <p>
            We may change this privacy policy. If we make any changes, we will
            change the Last Updated date above.
          </p>
        </article>
      </Container>
    </Layout>
  );
};

export default Privacy;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
