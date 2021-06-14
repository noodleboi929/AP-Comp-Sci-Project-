import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
const AboutPage = () =>{
  return(
    <Layout>
      <h1>About</h1>
      <p>My Name is Akash and I am struggling with Gatsby</p>
      <p>Need a Student: <Link to="/contact"> Contact Me</Link></p>
    </Layout>
  )
}

export default AboutPage