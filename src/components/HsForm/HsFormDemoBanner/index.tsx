import React from "react";
import HubspotForm from "react-hubspot-form";
import { EmptyProps } from "@/definitions";
import { Loader } from "@/components";

import "../HsForm.styles.css";

export const HsFormDemoBanner: React.FC<EmptyProps> = () => {
  return (
    <div className="formContainer">
      <HubspotForm
        portalId="7433878"
        formId="ffb8acb6-c894-4772-be15-75e787d7e212"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<Loader />}
      />
    </div>
  );
};
