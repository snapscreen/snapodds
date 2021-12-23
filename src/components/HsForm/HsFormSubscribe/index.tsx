import React from "react";
import HubspotForm from "react-hubspot-form";
import { EmptyProps } from "@/definitions";
import { Loader } from "@/components";

import "../HsForm.styles.css";

export const HsFormSubscribe: React.FC<EmptyProps> = () => {
  return (
    <div className="formContainer">
      <h3 className="formTitle">Subscribe for updates</h3>
      <HubspotForm
        portalId="7433878"
        formId="925fee04-057d-4519-ad75-8c4b61bd5417"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<Loader />}
      />
    </div>
  );
};
