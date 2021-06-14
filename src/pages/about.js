import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import * as aboutStyle from "./about.module.scss";
const AboutPage = () => {
  return (
    <Layout>
      <h1 className={aboutStyle.heads}>About:</h1>
      <div className={aboutStyle.flexer}>
        <a
          href="http://bernardsboe-ridgehigh.ss5.sharpschool.com/"
          target="__blank"
        >
          <img src="ridge.svg" />
        </a>
        <p>
          My Name is Akash and I am currently a sophmore at Ridge High School.
        </p>
        <p>
          However I am not like a normal sophmore. Even though most of my peers
          are already 16, I wont turn 16 until next year.
        </p>
        <p>
          I personally think that I am smart, funny, and charismatic, but I
          guess thats for you to decide.
        </p>
        <a href="https://www.mskcc.org/" target="__blank">
          <img src="msk.svg" />
        </a>
        <p>
          I am really excited for the summer this year becuase I finally got my
          first internship.{" "}
        </p>
        <p>
          I am really interest in computer science and bioinformatics and plan
          on studying it in college.
        </p>
        <p>
          The internship is at MSK and I get to shadow a bioinformatics
          professional !
        </p>
        <img src="smile.svg" />
        <p>Enjoy Your Summer !!!</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
