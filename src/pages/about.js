import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import * as aboutStyle from "./about.module.scss";
const AboutPage = () => {
  return (
    <Layout>
      <h1 className={aboutStyle.heads}>About:</h1>
      <div className={aboutStyle.flexing}>
        <div className={aboutStyle.flexer}>
          <p>
            My Name is Akash and I am currently a sophmore at Ridge High School.
            However I am not like a normal sophmore. Even though most of my
            peers are already 16, I wont turn 16 until next year. I personally
            think that I am smart, funny, and charismatic, but I guess thats for
            you to decide.
          </p>
        </div>
        <a
          href="http://bernardsboe-ridgehigh.ss5.sharpschool.com/"
          target="__blank"
        >
          <img src="ridge.svg" />
        </a>
        <div className={aboutStyle.flexer}>
          <p>
            I am really excited for the summer this year becuase I finally got
            my first internship. I am really interest in computer science and
            bioinformatics and plan on studying it in college. The internship is
            at MSK and I get to shadow a bioinformatics professional !
          </p>
        </div>
        <a href="https://www.mskcc.org/" target="__blank">
          <img src="msk.svg" />
        </a>
        <div className={aboutStyle.flexer}>
          <p>Enjoy Your Summer !!!</p>
        </div>
        <img src="smile.svg" />
      </div>
    </Layout>
  );
};

export default AboutPage;
