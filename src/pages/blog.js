import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Post from "../components/post";
import * as blogStyle from "./blog.module.scss";

const BlogPage = ({ title, content, date, index = 0 }) => {
  const query = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulAkashpost(sort: { fields: id, order: DESC }) {
          edges {
            node {
              id
              date
              firstmodule
              content {
                content
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <h1> Blog</h1>
      <p>Posts will show up here later on</p>
      {/* <code>{JSON.stringify(b)}</code> */}

      <div className={blogStyle.center}>
        {query.allContentfulAkashpost.edges.map((edge, i) => (
          <Post
            key={edge.node.id}
            title={edge.node.firstmodule}
            content={edge.node.content.content}
            date={edge.node.date}
            index={i}
          />
        ))}
      </div>
    </Layout>
  );
};
export default BlogPage;
