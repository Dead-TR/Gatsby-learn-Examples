import React from 'react';
import {graphql} from 'gatsby';
import {css} from '@emotion/core';
import {rhythm} from '../utils/typography';
import Layout from '../components/layout';

export default function Mark({data}) {

  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Mark Page
        </h1>

          {/* Туть, ми отримуємо об'єкт, зі знайденими
            md сторінками, перебираємо його, й рендеримо

            Таким чином, реалізується можливість створення
            записів, простим додаванням нового файлу,
            із відповідним форматом
          */}
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({node}, i, src) => {

          return (
            <div key={node.id}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1/4)}
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

  //allMarkdownRemark - модуль для пошуку в GQL md файлів
  // даний запит, знаходить усі файли, формату md,
    //й додає їх в об'єкт, відповідно до вказаної,
    // у запиті, інформації.
export const QARA = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
