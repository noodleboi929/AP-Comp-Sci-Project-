import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

//import './header.module.scss'
import * as headerStyles from "./header.module.scss";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={headerStyles.headerStyle}>
      <div className={headerStyles.header}>
        {/* <div className={headerStyles.flexDiv}> */}
        {/* <h1 className={headerStyles.imgStyle}> */}
        <Link className={headerStyles.title} to="/">
          {/* <StaticImage src = {"../images/Frame1.png"} alt = "Logo" placeholder = "blurred" layout="fixed"/> */}
          <img src="akashm.inline.svg" />
        </Link>
        {/* </h1> */}

        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                {" "}
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* </div> */}
      </div>
    </header>
  );
};
export default Header;
