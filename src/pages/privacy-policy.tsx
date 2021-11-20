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
            Snapscreen Inc built the SnapOdds app as a Free app. This SERVICE is
            provided by Snapscreen Inc at no cost and is intended for use as is.
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at SnapOdds unless
            otherwise defined in this Privacy Policy.
          </p>
          <h2>Information Collection and Use</h2>
          <p>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information. The
            information that we request will be retained by us and used as
            described in this privacy policy.
          </p>
          <h2>Log Data</h2>
          <p>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
          <h2>Cookies</h2>
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory.
          </p>
          <p>
            This Service does not use these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
          <h2>Service Providers</h2>
          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
            We want to inform users of this Service that these third parties
            have access to your Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </p>
          <h2>Security</h2>
          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
          <h2>Links to Other Sites</h2>
          <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <h2>Children’s Privacy</h2>
          <p>
            These Services do not address anyone under the age of 13 17 . We do
            not knowingly collect personally identifiable information from
            children under 13 17 years of age. In the case we discover that a
            child under 13 17 has provided us with personal information, we
            immediately delete this from our servers. If you are a parent or
            guardian and you are aware that your child has provided us with
            personal information, please contact us so that we will be able to
            do necessary actions.
          </p>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <p>This policy is effective as of 2021-11-01</p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at hello@snapodds.com.
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
