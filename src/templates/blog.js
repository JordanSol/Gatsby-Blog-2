import React from 'react'
import {graphql} from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import Layout from '../components/Layout'
import * as styles from './Blog.module.scss'

// export const query = graphql`
//     query (
//         $slug: String!) {
//         markdownRemark (fields: {slug: {eq: $slug}}) {
//           frontmatter {
//             title
//             date
//             }
//           html
//         }
//     }
// `

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug:{eq: $slug}) {
            title
            publishedDate(formatString:"MMMM Do YYYY")
            body {
                raw
            }
        }
    }
`
const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
           <div>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
            <img
              src={node.data.target.fixed.src}
              alt={node.data.target.title}
            />
          </div>
        )
      }
    }
  }

const Blog = ({data}) => {
    return (
        <Layout>
          <div className={styles.container}>
            <section className={styles.article}>
              <h1 className={styles.title}>{data.contentfulBlogPost.title}</h1>
              <p className={styles.date}>{data.contentfulBlogPost.publishedDate}</p>
              <hr className={styles.divider}/>
              <div className={styles.content}>
                  {renderRichText(data.contentfulBlogPost.body, options)}
              </div>
            </section>
          </div>
        </Layout>
    )
}

export default Blog