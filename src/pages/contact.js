import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import * as contactStyles from "./contact.module.scss";
const ContactPage = () => {
  return (
    <Layout>
      <h1>Contacts</h1>
      <p>You can contact me at akashmacha73@gmail.com</p>
      <p>
        Follow me on Twitter:{" "}
        <a href="https://twitter.com" target="_blank">
          {" "}
          My Twitter
        </a>
      </p>
      <div className={contactStyles.flexDesign}>
        <a href="mailto: akashmacha73@gmail.com" target="__blank">
          <img src="gmailpic.svg" alt="This Dumb" />
        </a>
        <img src="call.svg" />
        <a href="https://twitter.com/" target="__blank">
          <img src="twitter.svg" />
        </a>
        <a href="https://www.facebook.com/" target="__blank">
          <img src="facebook.svg" />
        </a>
        <a href="https://www.linkedin.com/feed/" target="__blank">
          <img src="linkedin.svg" />
        </a>
      </div>
    </Layout>
  );
};

export default ContactPage;
