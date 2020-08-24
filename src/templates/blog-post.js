import React from 'react'
import { Link, graphql } from 'gatsby'

import { ContentLayout as Layout } from '../components/Layout/ContentLayout'
import SEO from '../components/SEO'
import { Container } from 'react-bootstrap'
import { HLine } from '../components/HLine'
import { DiscussionEmbed } from 'disqus-react';
const lodash = require('lodash')



class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const disqus_shortname = this.props.data.site.siteMetadata.disqusShortname
    const base_url = this.props.location.origin
    // console.log(this.props.location)
    const disqus_config = {
      url: base_url + post.fields.slug,
      identifier: post.fields.slug,
      title: post.frontmatter.title,
    }
    const prefix_page = '/blog'
    const { previous, next } = this.props.pageContext

    

    return (
      <Layout breadcrumb_items={[
        { link: prefix_page, name: 'Blog' },
        { link: post.fields.slug, name: post.frontmatter.title },

      ]}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt || 'nothin’'}
          // image={post.frontmatter.image.childImageSharp.sizes.src}
          pathname={post.fields.slug}
          article
        />

        <Container fluid={true}>
          <main>
            <p className={'time'}>Written on <time>{post.frontmatter.date}</time></p>
            <p className={'rd-t'}>{post.fields.readingTime.text}</p>
            <h1>{post.frontmatter.title}</h1>
            <HLine />
            {/* <TypographyStyle> */}
              <article className={'text-body'} dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* </TypographyStyle> */}
            <Container style={{marginTop: '4rem'}} fluid={true}>
            {
              post.frontmatter.tags.map(tag => {
                return( <Link to={prefix_page + "/tags/" + lodash.kebabCase(tag)} className="badge badge-dark">{tag}</Link>)
              })
            }
            </Container>
            <HLine />
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link className={"btn btn-link"} to={previous.fields.slug} rel="prev">
                    « { (previous.frontmatter.title.length < 25) ? previous.frontmatter.title : previous.frontmatter.title.substring(0, 25) + ' ...'}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link className={"btn btn-link"} to={next.fields.slug} rel="next">
                    { (next.frontmatter.title.length < 25) ? next.frontmatter.title : next.frontmatter.title.substring(0, 25) + ' ...'} »
                            </Link>
                )}
              </li>
            </ul>
            <HLine />
            <Container fluid={true}>
              <DiscussionEmbed shortname={disqus_shortname} config={disqus_config} />
            </Container>
          </main>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title,
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        tags
      }
      fields {
        slug
        readingTime{
          text
        }
      }
    }
  }
`