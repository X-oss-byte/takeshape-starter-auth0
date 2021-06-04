import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Layout from "../components/layout";

export default function Profile({ user }) {
  return (
    <Layout>
      <h1>Profile</h1>

      <div>
        <h4>Profile (server rendered)</h4>
        <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withPageAuthRequired();
