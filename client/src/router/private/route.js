import React from "react";
import Layout from "../../shared/layout";

export default function PrivateRoute(props) {
  const Component = props.component;
  const route = props.route;

  return (
    <Layout>
      <Component route={route} />
    </Layout>
  );
}
