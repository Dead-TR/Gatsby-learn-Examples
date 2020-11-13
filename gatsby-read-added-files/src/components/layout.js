import React from 'react';
import {css} from '@emotion/core';
import {useStaticQuery, Link, graphql} from 'gatsby';
  //useStaticQuery -- метод, для здійснення query запиту
  //graphql - вказує на формат бектік-даних

import {rhythm} from '../utils/typography';

export default function Layout({children}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  
  return (
    <div
      css={css`
        margin: 0 auto,
        max-width: 700px,
        padding: ${rhythm(2)},
        padding-top: ${rhythm(1.5)},
      `}
    >
      <Link to={'/'}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)},
            display: inline-block,
            font-style: normal,
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>

      <Link
        to={`/about/`}
        css={css`
          float: right;
          margin: 0 10px;
        `}
      >
        About
      </Link>
      <Link
        to={`/files/`}
        css={css`
          float: right;
          margin: 0 10px;
        `}
      >
        Files
      </Link>

      <Link
        to={`/mark/`}
        css={css`
          float: right;
          margin: 0 10px;
        `}
      >
        Mark
      </Link>

      {children}
    </div>
  )
}
