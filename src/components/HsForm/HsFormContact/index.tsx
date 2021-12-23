import React from "react";
import HubspotForm from "react-hubspot-form";
import { EmptyProps } from "@/definitions";
import { Loader } from "@/components";

import "../HsForm.styles.css";

export const HsFormContact: React.FC<EmptyProps> = ({ text }) => {
  return (
    <div className="formContainer">
      <h3 className="formTitle">Get in touch.</h3>
      <HubspotForm
        portalId="7433878"
        formId="a1575fee-463f-415a-ae4c-80a5b4e63f12"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<Loader />}
      />
    </div>
  );
};
