//* Cторінка-прототип

import React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby";

export default function BlogPost({data}) {
  // data -- отримані з БД елементи
  const {date, title} = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div
        dangerouslySetInnerHTML={ // вставляємо html у сторінку
          { __html: data.markdownRemark.html }
        }
      />
    </Layout>
  )  
}

  //  Отримуємо з БД дані для відображення
    // query($slug: String!) - тут, ми передаємо змінну, в запит
    // markdownRemark(fields: {slug: {eq: $slug}}) 
      // - тут, в теці markdownRemark, відбувається пошук
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

