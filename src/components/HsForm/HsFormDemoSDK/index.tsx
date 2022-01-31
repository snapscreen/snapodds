import React from "react";
import HubspotForm from "react-hubspot-form";
import { EmptyProps } from "@/definitions";
import { Loader } from "@/components";

import "../HsForm.styles.css";

export const HsFormDemoSDK: React.FC<EmptyProps> = () => {
  return (
    <div className="formContainer">
      <HubspotForm
        portalId="7433878"
        formId="33b4a1ce-a833-4c22-8064-77ee8c3f4796"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<Loader />}
      />
    </div>
  );
};
