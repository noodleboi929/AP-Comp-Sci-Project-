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
            My name is Akash and I am currently a sophmore at Ridge High School.
            But I am not some static character like this website is. I have
            multiple interests. I play for volleyabll fo the school. I am played
            on Junior Varsity this year, but I was fortunate to be the capatain
            of the JV team. I also enjoy videogames. My favorites are usually
            first person shooters, RPGs, or gacha games. Thirdly, I also like
            coding and this website is a testament to that. I personally think
            that I am smart, funny, and charismatic, but I guess thats for you
            to decide.
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
            Summer is right around the corner and I am really excited for it
            this year! First of all, I am excited to see all of my friends in
            person again, just like the old times. Additionally, this is the
            perfect summer for me to rapidly improve my volleyball skills.
            Finally, I will be attending an internship and multiple volunteering
            programs, which will create a unique experience.
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
