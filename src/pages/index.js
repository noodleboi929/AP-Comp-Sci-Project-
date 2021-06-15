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
        <h1 className={indexStyles.heads}>Hello:</h1>
        <div className={indexStyles.flexing}>
          <div className={indexStyles.flexer}>
            <h2>This is my first Gatsby Site, so I hope you enjoy!</h2>
            <p>
              Gatsby is a static site generator that is React-based and is
              powered by Graphql. The variety of plugins and vast Community
              allows you to do amazing things in Gatsby that you couldn't do in
              just HTML. I just started getting interested in HTML and web
              development again, so this is a big milestone for me. The crown
              Jewel of this website is the blog page. In simple terms, I am able
              to post content form a third party without having to edit my base
              code. I hope you enjoy the website and feel free to contact me
              regarding anything
            </p>
            <h2>What is This Website?</h2>
            <p>
              This is a portfolio website. It is essentially a digital 'resume'.
              It contains basic information about me and my accomplishment. In
              all honesty this website itself is an accomplishment becuase I
              have never used gatsby before.
            </p>
          </div>
          <a href="https://www.gatsbyjs.com/" target="__blank">
            <img src="gatsby.svg" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
