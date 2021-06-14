import React from "react";
import { Link } from "gatsby";
import * as indexStyles from "./index.module.scss";

import Layout from "../components/layout";
const IndexPage = () => {
  return (
    <Layout removeTopMargin>
      <div className={indexStyles.divingStyle}>
        <h1 className={indexStyles.head}>Welcome To the Akash Site</h1>
      </div>
      <div className={indexStyles.marginStyle}>
        <h1>Hello.</h1>
        <h2>I am Trying to make a Gatsby Site.</h2>
        <p>
          Need a Student? <Link to="/contact"> Contact Me </Link>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
