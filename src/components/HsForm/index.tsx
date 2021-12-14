import React, { useState } from "react";
import { Link } from "gatsby";
import { Button } from "@/components";
import axios from "axios";

export const HsForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email) return;
    const hubspot_response = await submit_hubspot_form(email);
    console.log(hubspot_response);
  };

  const submit_hubspot_form = async (email: string) => {
    const portalId = "7433878";
    const formGuid = "925fee04-057d-4519-ad75-8c4b61bd5417";
    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: "email",
            value: email,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
      }
    );
    return response;
  };
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-16">
      <div className="px-6 py-6 bg-skin-base-flash rounded-lg lg:space-x-16 md:py-12 lg:px-12 lg:py-16 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Got a question?
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6">
            Post us your Email address so we can get in touch with You.
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-lg lg:mt-0 lg:ml-8">
          <form className="sm:flex" onSubmit={handleSubmit}>
            <label htmlFor="emailInput" className="sr-only">
              Email address
            </label>
            <input
              id="emailInput"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-skin-base border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-skin-focus focus:ring-white focus:z-10"
              autoComplete="email"
              placeholder="Enter your email"
            />
            <Button type="submit" styleType="primary">
              Get in touch
            </Button>
          </form>
          <p className="mt-3 text-sm">
            We care about the protection of your data. Read our{" "}
            <Link
              to="/privacy-policy"
              className="text-current font-medium underline"
            >
              Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
