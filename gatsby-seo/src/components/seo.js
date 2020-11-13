import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

function SEO({ description, lang, meta, title }) {
console.log("SEO -> title", title)

  //Таким Макаром, буде отримано об'єкт наступного типу:
  /*{siteMetadata: {
      author: gatsbyjs,
      description: A simple description about pandas eating lots...,
      title: Pandas Eating Lots
    }*/
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{lang}} // в html tag додає рядок lang i data-react-htlmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`} // замінює стандартний титул
      mata={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO;
